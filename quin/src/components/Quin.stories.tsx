import { Meta, StoryObj } from "@storybook/react";
import { Quin } from "./Quin";

const meta: Meta<typeof Quin> = {
  title: "Hero/Quin",
  component: Quin,
  argTypes: {
    // Define the props and their types here
    // Example:
    // title: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Quin>;

export const Default: Story = {
  args: {
    // Default props for the component
    // Example:
    // title: 'Default Title',
  },
};
