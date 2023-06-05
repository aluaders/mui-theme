import type { FC } from 'react';
import React from 'react';

import { Checkbox as MuiCheckbox, CheckboxProps as MuiCheckboxProps } from '@mui/material';

type CheckboxBaseProps = Omit<MuiCheckboxProps, 'classes' | 'sx' | 'ref' | 'style'>;

export const Checkbox: FC<CheckboxBaseProps> = ({...args}) => (<MuiCheckbox {...args} />);