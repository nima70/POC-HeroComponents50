import React, { useState } from "react";
import BrowserSelector from "./BrowserSelector"; // Import the new BrowserSelector component
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Define the browsers data for the combobox
const browsers = [
  {
    value: "edge",
    label: "Edge",
  },
  {
    value: "chrome",
    label: "Chrome",
  },
  {
    value: "firefox",
    label: "Firefox",
  },
  {
    value: "safari",
    label: "Safari",
  },
  {
    value: "opera",
    label: "Opera",
  },
];

export function BrowserCardWithSelector() {
  const [open, setOpen] = useState(false);

  // Set "chrome" as the default selected browser
  const [selectedBrowser, setSelectedBrowser] = useState<string>("chrome");

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            role="combobox"
            size="sm"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            Other Browsers
            {/* {selectedBrowser
              ? browsers.find((browser) => browser.value === selectedBrowser)
                  ?.label
              : "Other Browsers"} */}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search browser..." />
            <CommandList>
              <CommandEmpty>No browser found.</CommandEmpty>
              <CommandGroup>
                {browsers.map((browser) => (
                  <CommandItem
                    key={browser.value}
                    value={browser.value}
                    onSelect={(currentValue) => {
                      setSelectedBrowser(
                        currentValue === selectedBrowser ? "" : currentValue
                      );
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={`mr-2 h-4 w-4 ${
                        selectedBrowser === browser.value
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />
                    {browser.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Render the BrowserSelector which will dynamically show the correct browser card */}
      {selectedBrowser && (
        <div className="mt-5 w-full flex items-center justify-center">
          <BrowserSelector selectedBrowser={selectedBrowser} />
        </div>
      )}
    </div>
  );
}
