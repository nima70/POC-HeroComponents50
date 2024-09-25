import { Meta, StoryObj } from "@storybook/react";
import BrowserSelector from "./BrowserSelector"; // Adjust the path to your BrowserSelector component

// Meta configuration for BrowserSelector story
const meta: Meta<typeof BrowserSelector> = {
  title: "Components/BrowserSelector",
  component: BrowserSelector,
  tags: ["autodocs"], // Optional: for automatic documentation
  argTypes: {
    selectedBrowser: {
      control: { type: "select" }, // Create a dropdown for browser selection
      options: ["edge", "chrome", "firefox", "safari", "opera"], // Available browser options
      description: "Select a browser to display its card",
      defaultValue: "chrome",
    },
  },
};

export default meta;

type Story = StoryObj<typeof BrowserSelector>;

// Default story for BrowserSelector
export const Default: Story = {
  args: {
    selectedBrowser: "chrome", // Default browser to show on load
  },
};

// BrowserSelector with Edge selected
export const EdgeSelected: Story = {
  args: {
    selectedBrowser: "edge", // Display the Edge browser card
  },
};

// BrowserSelector with Firefox selected
export const FirefoxSelected: Story = {
  args: {
    selectedBrowser: "firefox", // Display the Firefox browser card
  },
};

// BrowserSelector with Safari selected
export const SafariSelected: Story = {
  args: {
    selectedBrowser: "safari", // Display the Safari browser card
  },
};

// BrowserSelector with Opera selected
export const OperaSelected: Story = {
  args: {
    selectedBrowser: "opera", // Display the Opera browser card
  },
};
