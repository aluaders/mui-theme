import type { FC } from 'react';
import React from 'react';

import { Button, ButtonGroup as MuiButtonGroup, ButtonGroupProps as MuiButtonGroupProps } from '@mui/material';

type ButtonGroupBaseProps = Omit<MuiButtonGroupProps, 'classes' | 'sx' | 'ref' | 'style'>;

export const ButtonGroup: FC<ButtonGroupBaseProps> = ({...args}) => (
    <MuiButtonGroup {...args}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
    </MuiButtonGroup>
);