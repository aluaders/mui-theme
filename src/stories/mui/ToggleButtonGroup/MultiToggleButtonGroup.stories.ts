import type { Meta, StoryObj } from '@storybook/react';

import { MultiToggleButtonGroup } from './ToggleButtonGroup';

const meta = {
  title: 'Inputs/ToggleButtonGroup',
  component: MultiToggleButtonGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof MultiToggleButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Multi: Story = { };
