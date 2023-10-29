import React from 'react'
import { Button } from '@mantine/core'
import { RouteParams } from 'atomic-router'
import {
  Link as LinkAtomic,
  LinkProps as LinkAtomicProps
} from 'atomic-router-react'
import { clsx } from 'clsx'

import { link } from './Link.css'

type LinkProps<Params extends RouteParams> = LinkAtomicProps<Params>

const _Link = <Params extends RouteParams>({
  children,
  className,
  ...props
}: LinkProps<Params>) => {
  return (
    <Button
      variant="subtle"
      renderRoot={(restProps) => (
        <LinkAtomic
          {...props}
          {...restProps}
          className={clsx(link, className)}
        >
          {children}
        </LinkAtomic>
      )}
    />
  )
}

export const Link = React.memo(_Link)
