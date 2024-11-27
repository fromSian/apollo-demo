import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TriangleDownIcon, TriangleUpIcon } from "@radix-ui/react-icons";
import React, { ReactNode, useState } from "react";

type DropdownSimpleProps = {
  children: ReactNode;
  content: ReactNode;
  className?: string;
};
const DropdownSimple = ({
  children,
  content,
  className = "",
}: DropdownSimpleProps) => {
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu open={open} onOpenChange={(v) => setOpen(v)}>
      <DropdownMenuTrigger>
        <div className={className}>
          {children}
          {open ? <TriangleUpIcon /> : <TriangleDownIcon />}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>{content}</DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownSimple;
