import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const LeftVersion = () => {
  const [fold, setFold] = useState(true);
  return (
    <div
      className={twMerge(
        "hidden sm:block border-r h-full transition",
        fold ? "w-8" : "w-48"
      )}
    >
      <button onClick={() => setFold((v) => !v)}>{fold ? "ex" : "fold"}</button>
    </div>
  );
};

export default LeftVersion;
