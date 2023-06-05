import type { FC } from 'react';
import React from 'react';

import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';

type TextFieldBaseProps = Omit<MuiTextFieldProps, 'classes' | 'sx' | 'ref' | 'style'>;

export const TextField: FC<TextFieldBaseProps> = ({...args}) => (<MuiTextField {...args} />);