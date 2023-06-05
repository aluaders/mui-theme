import type { FC } from 'react';
import React from 'react';

import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

type ButtonProps = Omit<MuiButtonProps, 'classes' | 'sx' | 'ref' | 'style'>;

export const Button: FC<ButtonProps> = ({...args}) => (<MuiButton {...args} />);