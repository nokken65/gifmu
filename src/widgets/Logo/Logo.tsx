import React from 'react'
import { Title } from '@mantine/core'

import { Link } from '@/shared/components'
import { routes } from '@/shared/config/routes'
import { LogoIcon } from '@/shared/icons'

import { icon, link, title } from './Logo.css'

const _Logo = () => {
  return (
    <Link
      to={routes.index.route}
      className={link}
    >
      <LogoIcon className={icon} />
      <Title
        className={title}
        order={1}
      >
        GifMu
      </Title>
    </Link>
  )
}

export const Logo = React.memo(_Logo)
