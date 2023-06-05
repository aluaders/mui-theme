import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { Add as MuiAddIcon, Navigation as MuiNavigationIcon } from '@mui/icons-material';

import { Fab } from './Fab';

const meta = {
  title: 'Inputs/Fab',
  component: Fab,
  tags: ['autodocs'],
} satisfies Meta<typeof Fab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { };

export const Icon: Story = {
  args: {
    children: <MuiAddIcon />
  }
}

export const Text: Story = {
  args: {
    children: 'Fab Text',
    variant: 'extended'
  }
}

export const IconAndText: Story = {
  args: {
    children: [
      <MuiNavigationIcon />,
      'Navigate'
    ],
    variant: 'extended'
  }
}
