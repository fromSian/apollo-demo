import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import React from "react";
import { twMerge } from "tailwind-merge";
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputExtra = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="border border-heavy_gray rounded-lg p-1 flex gap-2 items-center ">
        <MagnifyingGlassIcon width={20} height={20} />
        <input
          type={type}
          className={twMerge(
            "flex placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

export default InputExtra;
