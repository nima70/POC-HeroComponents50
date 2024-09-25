import { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "./popover"; // Adjust the import path

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  args: {
    // you can define default props here if needed
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "3rem" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Popover>;

// Default Story
export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Click me
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <p>This is the popover content</p>
      </PopoverContent>
    </Popover>
  ),
};
