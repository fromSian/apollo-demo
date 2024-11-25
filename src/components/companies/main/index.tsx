import React from "react";
import DefaultFilterPanel from "./default-filter-panel";
import OperateBar from "./operate-bar";
import TablePanel from "./table-panel";

const Main = () => {
  return (
    <div className="flex-1 flex flex-col">
      <OperateBar />
      <div className="flex flex-1">
        <DefaultFilterPanel />
        <TablePanel />
      </div>
    </div>
  );
};

export default Main;
