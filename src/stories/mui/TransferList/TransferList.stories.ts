import type { Meta, StoryObj } from '@storybook/react';

import { TransferList } from './TransferList';

const meta = {
  title: 'Inputs/TransferList',
  component: TransferList,
} satisfies Meta<typeof TransferList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = { };
