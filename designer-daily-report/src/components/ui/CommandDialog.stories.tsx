import { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { CommandDialog, CommandInput, CommandList, CommandItem, CommandGroup, CommandEmpty } from "./command"; // Adjust the import path

const meta: Meta<typeof CommandDialog> = {
  title: "Components/CommandDialog",
  component: CommandDialog,
  tags: ['autodocs'], // Optional
  args: {
    open: true, // Set the dialog to be open by default for easier testing in Storybook
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '3rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CommandDialog>;

export const Default: Story = {
  render: (args) => (
    <CommandDialog {...args}>
      <CommandInput placeholder="Search something..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>First Option</CommandItem>
          <CommandItem>Second Option</CommandItem>
          <CommandItem>Third Option</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  ),
};

export const WithPredefinedItems: Story = {
  render: (args) => (
    <CommandDialog {...args}>
      <CommandInput placeholder="Search predefined items..." />
      <CommandList>
        <CommandGroup heading="Browsers">
          <CommandItem>Chrome</CommandItem>
          <CommandItem>Firefox</CommandItem>
          <CommandItem>Safari</CommandItem>
        </CommandGroup>
        <CommandGroup heading="Text Editors">
          <CommandItem>VS Code</CommandItem>
          <CommandItem>Sublime</CommandItem>
          <CommandItem>Atom</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  ),
};
