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
import * as React from "react";
export default function Intro() {
  const [open, setOpen] = React.useState(true);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTitle>Hi, I'm Mridul Agarwal, welcome to my computer</DialogTitle>
      <DialogContent>
        Or at least a portfolio inspired by it press <strong>Alt+R</strong> to
        open the menu, and <strong>Enter</strong>to dismiss this. Have fun!!
      </DialogContent>
    </Dialog>
  );
}
