import TooltipSimple from "@/components/ui/tooltip-simple";
import {
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const LeftVersion = () => {
  const [fold, setFold] = useState(true);
  return (
    <div
      className={twMerge(
        "catalog border-r h-full transition-all duration-1500 relative",
        fold ? "catalog-fold" : "catalog-expand"
      )}
    >
      <TooltipSimple content={fold ? "expand" : "fold"}>
        <div
          className="absolute right-2 top-4 cursor-pointer"
          onClick={() => setFold((v) => !v)}
        >
          {fold ? <DoubleArrowRightIcon /> : <DoubleArrowLeftIcon />}
        </div>
      </TooltipSimple>
    </div>
  );
};

export default LeftVersion;
