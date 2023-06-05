import type { FC } from 'react';
import React from 'react';

import { TemplateName as MuiTemplateName, TemplateNameProps as MuiTemplateNameProps } from '@mui/material';

type TemplateNameBaseProps = Omit<MuiTemplateNameProps, 'classes' | 'sx' | 'ref' | 'style'>;

export const TemplateName: FC<TemplateNameBaseProps> = ({...args}) => (<MuiTemplateName {...args} />);