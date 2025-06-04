"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./ui/command";

export default function Menu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "r" && e.altKey) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  function navigateTo(page: string) {
    router.push(page);
    setOpen(!open);
  }
  return (
    <div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Projects">
            <CommandItem
              onSelect={() => {
                navigateTo("/projects/ui-design");
              }}
            >
              <span>UI Design</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                navigateTo("/projects/nixos");
              }}
            >
              <span>Nix OS</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Tests">
            <CommandItem>
              <span>PSAT 10</span>
              <CommandShortcut>1120</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <span>PSAT 9</span>
              <CommandShortcut>100</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="About Me"></CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
