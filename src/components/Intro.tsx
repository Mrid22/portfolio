import * as React from "react";
import {
  Dialog,
  DialogClose,
  DialogTitle,
  DialogDescription,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";

export default function Intro() {
  return (
    <Dialog defaultOpen>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Hi I'm Mridul Agarwal, welcome to my computer!
          </DialogTitle>
          <DialogDescription>
            or atleast a portfolio inspired by it, you can (re)open the menu by
            pressing <strong>Alt+R</strong>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
