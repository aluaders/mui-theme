import type { StorybookConfig } from "@storybook/react-webpack5";
import { readdirSync } from 'fs';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    ...readdirSync(__dirname + '/../src/', { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .filter((dirent) => dirent.name !== 'utils')
      .map(
        (dirent) => `../src/${dirent.name}/**/*.stories.@(js|jsx|ts|tsx|mdx)`
      ),
  ],
  addons: [
    "@storybook/addon-links",
    '@storybook/addon-essentials', 
    "@storybook/addon-interactions",
    '@storybook/addon-styling'
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    builder: "@storybook/builder-webpack5",
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      // makes union prop types like variant and size appear as select controls
      shouldExtractLiteralValuesFromEnum: true,
      // makes string and boolean types that can be undefined appear as inputs and switches
      shouldRemoveUndefinedFromOptional: true,
      // Filter out third-party props from node_modules except @mui packages
      propFilter: (prop) =>
        prop.parent
          ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName)
          : true,
    },
  },
};
export default config;
