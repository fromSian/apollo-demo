import { MixIcon, PieChartIcon } from "@radix-ui/react-icons";
import React from "react";

const Error = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <PieChartIcon width={120} height={120} />
      <p className="font-bold w-[50%] text-center mt-4">
        something wrong with the params
      </p>
    </div>
  );
};

export default Error;
