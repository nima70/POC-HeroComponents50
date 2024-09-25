import type { StorybookConfig } from "@storybook/nextjs";



const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  webpackFinal: async (config) => {
    // Safely check if `config.module` and `config.module.rules` exist
    config.module = config.module || { rules: [] };

    // Add asset loading rule
    config.module.rules?.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: "asset/resource",
    });

    return config;
  },
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
};
export default config;
