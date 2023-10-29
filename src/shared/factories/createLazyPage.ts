import React from 'react'
import {
  chainRoute,
  RouteInstance,
  RouteParams,
  RouteParamsAndQuery
} from 'atomic-router'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { condition, not } from 'patronum'

export const createLazyPage = <
  Params extends RouteParams,
  Model,
  Page extends React.ComponentType<{ $$model: Model }>,
  StaticDeps extends Record<string, unknown>
>(
  route: RouteInstance<Params>,
  load: () => Promise<{
    createModel: (
      params: { route: RouteInstance<Params> } & StaticDeps
    ) => Model | Promise<Model>
    component: Page
  }>,
  staticDeps: StaticDeps
) => {
  const opened = createEvent<RouteParamsAndQuery<Params>>()
  const loaded = createEvent()

  const chainedRoute = chainRoute({
    route,
    beforeOpen: opened,
    openOn: loaded
  })

  let $$model: Promise<Model> | undefined

  const loadFx = createEffect(async () => {
    const { createModel, component } = await load()

    if ($$model === undefined) {
      $$model = Promise.resolve(
        createModel({
          route: chainedRoute,
          ...staticDeps
        })
      )
    }

    return { component, $$model: await $$model }
  })

  const $isLoaded = createStore(false).on(loaded, () => true)

  condition({
    source: opened,
    if: $isLoaded,
    then: loaded,
    else: loadFx
  })

  sample({
    clock: loadFx.done,
    filter: not($isLoaded),
    target: loaded
  })

  return React.lazy(() =>
    loadFx().then(({ component, $$model }) => {
      const Component = React.memo(
        (props: Omit<React.ComponentProps<Page>, '$$model'>) =>
          React.createElement(component, { $$model, ...props })
      )

      Component.displayName = `Wrapped${component.displayName ?? 'Page'}`

      return { default: component }
    })
  )
}
