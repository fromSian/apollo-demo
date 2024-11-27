import DropdownSimple from "@/components/ui/dropdown-simple";
import { StarIcon } from "@radix-ui/react-icons";
import React from "react";

const HeaderRightOperator = () => {
  return (
    <div className="flex gap-4">
      <DropdownSimple
        content={<div>power up content</div>}
        className="gradient-button text-white flex items-center gap-2"
      >
        <StarIcon />
        Power up
      </DropdownSimple>
      <DropdownSimple
        content={<div>import content</div>}
        className="border-button flex items-center gap-2"
      >
        Import
      </DropdownSimple>
    </div>
  );
};

export default HeaderRightOperator;
