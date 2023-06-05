import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Favorite as MuiFavoriteIcon, FavoriteBorder as MuiFavoriteBorderIcon } from '@mui/icons-material';

import { Checkbox } from './Checkbox';

const meta = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { };

export const Favorite: Story = {
  args: {
    icon: <MuiFavoriteBorderIcon />,
    checkedIcon: <MuiFavoriteIcon />
  }
};
