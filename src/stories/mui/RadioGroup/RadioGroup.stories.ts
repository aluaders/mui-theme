import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup } from './RadioGroup';

const meta = {
  title: 'Inputs/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { };
