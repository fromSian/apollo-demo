import { GearIcon } from "@radix-ui/react-icons";
import React from "react";

const SearchSettings = () => {
  return (
    <div>
      <button className="text-button flex gap-1 items-center">
        <GearIcon />
        Search settings
      </button>
    </div>
  );
};

export default SearchSettings;
