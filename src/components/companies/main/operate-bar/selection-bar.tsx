import { useCompaniesUI } from "@/stores/companies-ui";
import React from "react";

const SelectionBar = () => {
  const tableSelectedLength = useCompaniesUI(
    (state) => state.tableSelectedLength
  );
  const setTableSelectedLength = useCompaniesUI(
    (state) => state.setTableSelectedLength
  );
  return tableSelectedLength ? (
    <div className="absolute h-full max-w-full overflow-hidden py-2 z-10 ml-[50%] -translate-x-[50%] border rounded-md bg-white flex gap-2 px-2 items-center">
      <button
        className="text-button"
        onClick={() => {
          setTableSelectedLength(0);
        }}
      >
        {tableSelectedLength} selected
      </button>
      <button className="primary-button">Save</button>
      <button className="border-button">Find People</button>
      <button className="border-button">Add to lists</button>
      <button className="border-button">Create workflow</button>
      <button className="border-button">Exports</button>
      <button className="border-button">Edit</button>
      <button className="border-button">Power up</button>
      <button className="border-button">Polling</button>
    </div>
  ) : (
    <></>
  );
};

export default SelectionBar;
