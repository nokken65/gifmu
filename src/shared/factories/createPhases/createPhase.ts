import { createEvent, createStore, Effect, Event, is, sample } from 'effector';
import { combineEvents } from 'patronum';
import { EffectState, status } from 'patronum/status';

import { Dep, Deps, PhaseError } from './models';
import { combineStatuses, reshapeStatus } from './utils';

type CreatePhaseConfig<Dependensies extends Deps> = {
  deps?: Dependensies;
};

export const createPhase = <Dependencies extends Deps>({
  deps,
}: CreatePhaseConfig<Dependencies>) => {
  const started = createEvent<void>();
  const addedError = createEvent<PhaseError<Dependencies[number]>>();

  const $errors = createStore<Array<PhaseError<Dependencies[number]>> | null>(
    null,
  );

  $errors.on(addedError, (errors, newError) =>
    errors === null ? [newError] : [...errors, newError],
  );

  const { $$effects, $$events } = filterDependensies(deps);

  const $effectsStatus = getEffectsStatus(started, $$effects);
  const $eventsStatus = getEventsStatus(started, $$events);

  const $status = combineStatuses([$effectsStatus, $eventsStatus]);

  const { $isInitial, $isPending, $isDone, $isFail } = reshapeStatus($status);

  $$effects.forEach((effect) => {
    sample({
      clock: effect.failData,
      target: addedError,
    });
  });

  if (deps !== undefined && deps.length > 0) {
    sample({ clock: started, target: deps as Event<void>[] });
  }

  return {
    run: started,

    $errors,
    $status,

    $isInitial,
    $isPending,
    $isDone,
    $isFail,
  };
};

const filterDependensies = <Dependency extends Dep>(
  deps?: Array<Dependency>,
) => {
  if (deps === undefined || deps.length === 0) {
    return { $$effects: [], $$events: [] };
  }

  const $$effects = deps.filter(
    (
      dep,
    ): dep is Dependency extends Effect<any, any, any> ? Dependency : never =>
      is.effect(dep),
  );

  const $$events = deps.filter(
    (dep): dep is Dependency extends Event<any> ? Dependency : never =>
      is.event(dep),
  );

  return { $$effects, $$events };
};

const getEffectsStatus = <Dependency extends Exclude<Dep, Event<any>>>(
  started: Event<void>,
  $$effects: Array<Dependency>,
) => {
  const $status = createStore<EffectState>('initial');

  if ($$effects.length === 0) {
    sample({ clock: started, fn: () => 'done' as const, target: $status });

    return $status;
  }

  const $effectsStatus = combineStatuses(
    $$effects.map((effect) => status({ effect })),
  );

  return $effectsStatus;
};

const getEventsStatus = <
  Dependency extends Exclude<Dep, Effect<any, any, any>>,
>(
  started: Event<void>,
  $$events: Array<Dependency>,
) => {
  const $status = createStore<EffectState>('initial');

  if ($$events.length === 0) {
    sample({ clock: started, fn: () => 'done' as const, target: $status });

    return $status;
  }

  sample({
    clock: started,
    fn: () => 'pending' as const,
    target: $status,
  });

  sample({
    clock: combineEvents({
      events: [...$$events, started],
    }),
    fn: () => 'done' as const,
    target: $status,
  });

  return $status;
};
