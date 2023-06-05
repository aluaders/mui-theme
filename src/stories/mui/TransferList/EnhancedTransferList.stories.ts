import type { Meta, StoryObj } from '@storybook/react';

import { EnhancedTransferList } from './TransferList';

const meta = {
  title: 'Inputs/TransferList',
  component: EnhancedTransferList,
} satisfies Meta<typeof EnhancedTransferList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EnhancedExample: Story = { };
