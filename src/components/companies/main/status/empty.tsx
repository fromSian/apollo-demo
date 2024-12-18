import { MixIcon } from "@radix-ui/react-icons";
import React from "react";

const Empty = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <MixIcon width={120} height={120} />
      <p className="font-bold w-[50%] text-center mt-4">
        no data exists, please change the filter
      </p>
    </div>
  );
};

export default Empty;
