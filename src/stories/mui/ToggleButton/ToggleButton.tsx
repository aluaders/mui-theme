import type { FC } from 'react';
import React from 'react';

import { Check as MuiCheckIcon } from '@mui/icons-material';
import { ToggleButton as MuiToggleButton, ToggleButtonProps as MuiToggleButtonProps } from '@mui/material';

type ToggleButtonBaseProps = Omit<MuiToggleButtonProps, 'classes' | 'sx' | 'ref' | 'style'>;

export const ToggleButton: FC<ToggleButtonBaseProps> = ({...args}) => (
    <MuiToggleButton {...args} >
        <MuiCheckIcon />
    </MuiToggleButton>
);
