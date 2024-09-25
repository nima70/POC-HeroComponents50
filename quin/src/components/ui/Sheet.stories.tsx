// Sheet.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "./sheet";
import { Button } from "@/components/ui/button";

// Meta configuration for Autodocs
const meta: Meta<typeof Sheet> = {
  title: "Components/Sheet",
  component: Sheet,
  parameters: {
    docs: {
      description: {
        component:
          "A sheet component that slides in from any side of the screen and can contain any content.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Sheet>;

// Default story for the sheet with right-side trigger
export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Profile Settings</SheetTitle>
          <SheetDescription>
            Modify your personal profile settings here.
          </SheetDescription>
        </SheetHeader>
        <div className="p-4">
          <p>Here is the content of the sheet.</p>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button>Save Changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};
