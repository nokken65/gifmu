import React from 'react'
import { ActionIcon, Popover, Stack } from '@mantine/core'

import { SelectPrimaryColor } from '@/features/selectPrimaryColor'
import { ColorSchemeToggler } from '@/features/toggleColorScheme'
import { SettingsIcon } from '@/shared/icons'

import { dropdown } from './Settings.css'

const _Settings = () => {
  return (
    <Popover
      offset={8}
      classNames={{ dropdown }}
      keepMounted={true}
    >
      <Popover.Target>
        <ActionIcon
          variant="transparent"
          size={'lg'}
          radius={'md'}
        >
          <SettingsIcon
            width={20}
            height={20}
          />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown>
        <Stack>
          <SelectPrimaryColor />
          <ColorSchemeToggler />
        </Stack>
      </Popover.Dropdown>
    </Popover>
  )
}

export const Settings = React.memo(_Settings)
