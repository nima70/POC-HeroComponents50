import { Meta, StoryObj } from "@storybook/react";
import DailyReportLogo from "./DailyReportLogo";

const meta: Meta<typeof DailyReportLogo> = {
  title: "Components/DailyReportLogo",
  component: DailyReportLogo,
};

export default meta;

type Story = StoryObj<typeof DailyReportLogo>;

export const Default: Story = {
  args: {},
};
