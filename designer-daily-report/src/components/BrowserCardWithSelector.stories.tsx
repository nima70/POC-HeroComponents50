import { Meta, StoryObj } from "@storybook/react";
import { BrowserCardWithSelector } from "./BrowserCardWithSelector"; // Adjust the import path

const meta: Meta<typeof BrowserCardWithSelector> = {
  title: "Components/BrowserCardWithSelector",
  component: BrowserCardWithSelector,
  tags: ["autodocs"], // optional
};

export default meta;
type Story = StoryObj<typeof BrowserCardWithSelector>;

export const Default: Story = {
  args: {},
};

export const PreselectedBrowser: Story = {
  args: {
    // You can pass props here if your ComboboxDemo accepts any.
    // In this case, you don't have args in the current implementation.
  },
};
