import type { FC } from 'react';
import React from 'react';

import { Slider as MuiSlider, SliderProps as MuiSliderProps } from '@mui/material';

type SliderBaseProps = Omit<MuiSliderProps, 'classes' | 'sx' | 'ref' | 'style'>;

export const Slider: FC<SliderBaseProps> = ({...args}) => (<MuiSlider {...args} />);