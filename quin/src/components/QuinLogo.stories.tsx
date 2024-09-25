import { Meta, StoryObj } from "@storybook/react";
import QuinLogo from "./QuinLogo";

const meta: Meta<typeof QuinLogo> = {
  title: "Components/QuinLogo",
  component: QuinLogo,
};

export default meta;

type Story = StoryObj<typeof QuinLogo>;

export const Default: Story = {
  args: {
  },
};
