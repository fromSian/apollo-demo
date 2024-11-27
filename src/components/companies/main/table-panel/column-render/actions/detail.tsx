import {
  ComponentPlaceholderIcon,
  ListBulletIcon,
} from "@radix-ui/react-icons";
import React from "react";

const Detail = () => {
  return (
    <div className="flex gap-2">
      <button>
        <ListBulletIcon />
      </button>
      <button>
        <ComponentPlaceholderIcon />
      </button>
    </div>
  );
};

export default Detail;
