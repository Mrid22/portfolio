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
  const [open, setOpen] = React.useState(false);
  return <Dialog open={open} onOpenChange={setOpen} modal={true}></Dialog>;
}
