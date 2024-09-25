import React, { useState } from "react";
import QuinLogo from "./QuinLogo";
import { Button } from "./ui/button";
import HamburgerMenu from "./HamburgerMenu"; // Import the HamburgerMenu component
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"; // Import Sheet components

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open and close
  };

  return (
    <nav className="flex justify-between items-center p-4  w-full">
      {/* Logo */}
      <div className="flex items-center">
        <QuinLogo className="fill-primary w-20 h-10" />
      </div>

      {/* Hamburger Menu for small screens */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={toggleMenu}>
          <SheetTrigger asChild>
            <div>
              <HamburgerMenu isOpen={isOpen} onClick={toggleMenu} />
            </div>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>
                <QuinLogo className="fill-primary w-16 h-8" />
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-4 py-4">
              <Button variant="outline" className="border rounded">
                Login
              </Button>
              <Button className="border rounded">Try Quin</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      {/* Menu for larger screens */}
      <div className="hidden md:flex space-x-4">
        <Button
          variant="outline"
          className="px-4 py-2 border rounded hover:bg-gray-200"
        >
          Login
        </Button>
        <Button className="px-4 py-2 border rounded hover:bg-gray-200">
          Try Quin
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
