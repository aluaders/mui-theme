import type { Meta, StoryObj } from '@storybook/react';

import { ToggleButton } from './ToggleButton';

const meta = {
  title: 'Inputs/ToggleButton',
  component: ToggleButton,
  tags: ['autodocs'],
  args: {
    value: 'Toggle Button'
  }
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { };
