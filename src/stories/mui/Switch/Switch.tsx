import type { FC } from 'react';
import React from 'react';

import { Switch as MuiSwitch, SwitchProps as MuiSwitchProps } from '@mui/material';

type SwitchBaseProps = Omit<MuiSwitchProps, 'classes' | 'sx' | 'ref' | 'style'>;

export const Switch: FC<SwitchBaseProps> = ({...args}) => (<MuiSwitch {...args} />);