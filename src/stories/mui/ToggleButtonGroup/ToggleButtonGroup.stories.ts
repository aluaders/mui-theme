import type { Meta, StoryObj } from '@storybook/react';

import { ToggleButtonGroup } from './ToggleButtonGroup';

const meta = {
  title: 'Inputs/ToggleButtonGroup',
  component: ToggleButtonGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof ToggleButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = { };
