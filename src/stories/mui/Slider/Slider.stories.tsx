import type { Meta, StoryObj } from '@storybook/react';

import { Slider } from './Slider';

const meta = {
  title: 'Inputs/Slider',
  component: Slider,
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { };

export const Marks: Story = {
  args: {
    marks: [
      {
        value: 0,
        label: '0°C',
      },
      {
        value: 20,
        label: '20°C',
      },
      {
        value: 37,
        label: '37°C',
      },
      {
        value: 100,
        label: '100°C',
      },
    ]
  }
}
