import { Meta, StoryObj } from "@storybook/react";
import { DailyReport } from "./DailyReport";

const meta: Meta<typeof DailyReport> = {
  title: "Hero/DailyReport",
  component: DailyReport,
  argTypes: {
    // Define the props and their types here
    // Example:
    // title: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof DailyReport>;

export const Default: Story = {
  args: {
    // Default props for the component
    // Example:
    // title: 'Default Title',
  },
};
