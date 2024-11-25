import React from "react";
import { Link } from "react-router-dom";
import Account from "./account";

const Right = () => {
  return (
    <div className="flex gap-2">
      <Link to="/settings">icon1</Link>
      <Account />
    </div>
  );
};

export default Right;
