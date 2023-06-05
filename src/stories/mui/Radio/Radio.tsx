import type { FC } from 'react';
import React from 'react';

import { Radio as MuiRadio, RadioProps as MuiRadioProps } from '@mui/material';

type RadioBaseProps = Omit<MuiRadioProps, 'classes' | 'sx' | 'ref' | 'style'>;

export const Radio: FC<RadioBaseProps> = ({...args}) => (<MuiRadio {...args} />);