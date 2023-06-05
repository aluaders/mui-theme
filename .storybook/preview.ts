import type { Preview } from "@storybook/react";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { muiDark, muiLight } from '../src/themes';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

const themes = {
  'MUI - dark': muiDark,
  'MUI - light': muiLight
}

export const decorators = [
  withThemeFromJSXProvider({
  themes,
  defaultTheme: 'MUI - light',
  Provider: ThemeProvider,
  GlobalStyles: CssBaseline,
})];
