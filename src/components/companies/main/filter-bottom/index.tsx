import { useCompaniesUI } from "@/stores/companies-ui";
import React from "react";

const FilterBottom = () => {
  const toggleShowMoreFilter = useCompaniesUI(
    (state) => state.toggleShowMoreFilter
  );
  return (
    <div>
      <button>clear filter</button>
      <button onClick={toggleShowMoreFilter}>more filter</button>
    </div>
  );
};

export default FilterBottom;
