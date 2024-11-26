import React from "react";
import Paginator from "./paginator";
import Table from "./table";

const TablePanel = () => {
  return (
    <div className="flex-1 h-full">
      <Table />
      <Paginator />
    </div>
  );
};

export default TablePanel;
