import QueryIcon from "@/components/icons/query-icon";
import React from "react";

const Empty = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <div className="w-24 mb-4">
        <QueryIcon />
      </div>
      <p className="font-bold w-[50%] text-center">
        Start your companies search by applying any filter in the left panel
      </p>
    </div>
  );
};

export default Empty;
