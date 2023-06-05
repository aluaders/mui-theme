import type { FC } from 'react';
import React from 'react';

import { 
    FormatAlignLeft as MuiFormatAlignLeftIcon,
    FormatAlignCenter as MuiFormatAlignCenterIcon,
    FormatAlignRight as MuiFormatAlignRightIcon,
    FormatAlignJustify as MuiFormatAlignJustifyIcon,
    FormatBold as MuiFormatBoldIcon, 
    FormatItalic as MuiFormatItalicIcon, 
    FormatUnderlined as MuiFormatUnderlinedIcon
} from '@mui/icons-material';
import { ToggleButton, ToggleButtonGroup as MuiToggleButtonGroup, ToggleButtonGroupProps as MuiToggleButtonGroupProps } from '@mui/material';

type ToggleButtonGroupBaseProps = Omit<MuiToggleButtonGroupProps, 'classes' | 'sx' | 'ref' | 'style' | 'onChange' | 'value'>;

export const ToggleButtonGroup: FC<ToggleButtonGroupBaseProps> = ({...args}) =>  {
  const [alignment, setAlignment] = React.useState<string | null>('left');

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <MuiToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      {...args}
    >
      <ToggleButton value="left" aria-label="left aligned">
        <MuiFormatAlignLeftIcon />
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        <MuiFormatAlignCenterIcon />
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        <MuiFormatAlignRightIcon />
      </ToggleButton>
      <ToggleButton value="justify" aria-label="justified" disabled>
        <MuiFormatAlignJustifyIcon />
      </ToggleButton>
    </MuiToggleButtonGroup>
  );
}


type MultiToggleButtonGroupBaseProps = Omit<MuiToggleButtonGroupProps, 'classes' | 'sx' | 'ref' | 'style' | 'onChange' | 'value' | 'exclusive'>;

export const MultiToggleButtonGroup: FC<MultiToggleButtonGroupBaseProps> = ({...args}) =>  {
  const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[],
  ) => {
    setFormats(newFormats);
  };

  return (
    <MuiToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label="text formatting"
      {...args}
    >
      <ToggleButton value="bold" aria-label="bold">
        <MuiFormatBoldIcon />
      </ToggleButton>
      <ToggleButton value="italic" aria-label="italic">
        <MuiFormatItalicIcon />
      </ToggleButton>
      <ToggleButton value="underlined" aria-label="underlined">
        <MuiFormatUnderlinedIcon />
      </ToggleButton>
    </MuiToggleButtonGroup>
  );
}