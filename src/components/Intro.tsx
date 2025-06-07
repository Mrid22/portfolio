import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogDescription,
  DialogContent,
  DialogHeader,
} from "./ui/dialog";

export default function Intro() {
  return (
    <Dialog defaultOpen>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-white">
            Hi I'm Mridul Agarwal, welcome to my computer!
          </DialogTitle>
          <DialogDescription className="text-white">
            or atleast a portfolio inspired by it, you can (re)open the menu by
            pressing <strong>Alt+R</strong>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
