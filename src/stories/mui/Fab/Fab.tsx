import type { FC } from 'react';
import React from 'react';

import { Fab as MuiFab, FabProps as MuiFabProps } from '@mui/material';

type FabBaseProps = Omit<MuiFabProps, 'classes' | 'sx' | 'ref' | 'style'>;

export const Fab: FC<FabBaseProps> = ({...args}) => (<MuiFab {...args} />);