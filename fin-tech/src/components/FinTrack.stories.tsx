import { Meta, StoryObj } from "@storybook/react";
import { FinTrack } from "./FinTrack";

const meta: Meta<typeof FinTrack> = {
  title: "Hero/FinTrack",
  component: FinTrack,
  argTypes: {
    // Define the props and their types here
    // Example:
    // title: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof FinTrack>;

export const Default: Story = {
  args: {
    // Default props for the component
    // Example:
    // title: 'Default Title',
  },
};
