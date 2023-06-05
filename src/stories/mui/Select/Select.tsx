import type { FC } from 'react';
import React from 'react';

import { Select as MuiSelect, SelectProps as MuiSelectProps } from '@mui/material';

type SelectBaseProps = Omit<MuiSelectProps, 'classes' | 'sx' | 'ref' | 'style'>;

export const Select: FC<SelectBaseProps> = ({...args}) => (<MuiSelect {...args} />);