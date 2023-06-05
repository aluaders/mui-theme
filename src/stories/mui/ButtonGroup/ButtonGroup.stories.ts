import type { Meta, StoryObj } from '@storybook/react';

import { ButtonGroup } from './ButtonGroup';

const meta = {
  title: 'Inputs/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { };
