import type { FC } from 'react';
import React from 'react';

import { Rating as MuiRating, RatingProps as MuiRatingProps } from '@mui/material';

type RatingBaseProps = Omit<MuiRatingProps, 'classes' | 'sx' | 'ref' | 'style'>;

export const Rating: FC<RatingBaseProps> = ({...args}) => (<MuiRating {...args} />);