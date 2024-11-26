import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const LeftVersion = () => {
  const [fold, setFold] = useState(true);
  return (
    <div
      className={twMerge(
        "catalog border-r h-full transition-all duration-1500",
        fold ? "catalog-fold" : "catalog-expand"
      )}
    >
      <button onClick={() => setFold((v) => !v)}>{fold ? "ex" : "fold"}</button>
    </div>
  );
};

export default LeftVersion;
