import type { FC } from 'react';
import React from 'react';

import { FormControl, FormControlLabel, RadioGroup as MuiRadioGroup, RadioGroupProps as MuiRadioGroupProps, Radio } from '@mui/material';

type RadioGroupBaseProps = Omit<MuiRadioGroupProps, 'classes' | 'sx' | 'ref' | 'style'>;

export const RadioGroup: FC<RadioGroupBaseProps> = ({...args}) => (
    <FormControl>
        <MuiRadioGroup {...args}>
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
        </MuiRadioGroup>
    </FormControl>
);
