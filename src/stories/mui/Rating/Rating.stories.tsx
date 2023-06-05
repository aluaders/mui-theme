import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { Favorite as MuiFavoriteIcon, FavoriteBorder as MuiFavoriteBorderIcon } from '@mui/icons-material';

import { Rating } from './Rating';

const meta = {
  title: 'Inputs/Rating',
  component: Rating,
  tags: ['autodocs'],
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { };

export const Hearts: Story = {
  args: {
    icon: <MuiFavoriteIcon fontSize="inherit" />,
    emptyIcon: <MuiFavoriteBorderIcon fontSize="inherit" />
  }
}