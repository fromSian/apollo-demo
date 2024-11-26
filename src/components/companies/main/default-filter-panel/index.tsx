import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const DefaultFilterPanel = () => {
  const [hide, setHide] = useState(false);
  return (
    <div
      className={twMerge(
        "border-r flex flex-col h-full transition-all",
        !hide ? "filter-side-expand" : "filter-side-fold"
      )}
    >
      <div className="filter-default-top">top</div>
      <div className="filter-default-middle border-y overflow-y-auto">
        <div className="h-[800px]">middle</div>
      </div>
      <div className="bottom">filter-bottom</div>
    </div>
  );
};

export default DefaultFilterPanel;
