import { Meta, StoryObj } from "@storybook/react";
import NavBar from "./NavBar";

const meta: Meta<typeof NavBar> = {
  title: "Components/NavBar",
  component: NavBar,
  argTypes: {
    // Define the props and their types here
    // Example:
    // backgroundColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
  args: {
    // Default props for the NavBar component
    // Example:
    // backgroundColor: '#ffffff',
  },
};

export const WithCustomProps: Story = {
  args: {
    // Custom props for the NavBar component
    // Example:
    // backgroundColor: '#000000',
  },
};
