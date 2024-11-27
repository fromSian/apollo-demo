import { useCompaniesUI } from "@/stores/companies-ui";
import { SpaceBetweenHorizontallyIcon } from "@radix-ui/react-icons";
import { memo } from "react";

const ShowHideFilters = memo(({ filterLength }: { filterLength: number }) => {
  const toggleShowFilterShow = useCompaniesUI(
    (state) => state.toggleShowFilterShow
  );
  const showfilterSide = useCompaniesUI((state) => state.showfilterSide);
  return (
    <div
      className="flex items-center gap-1 text-button"
      onClick={toggleShowFilterShow}
    >
      <SpaceBetweenHorizontallyIcon />
      {showfilterSide ? "Hide filters" : "Show filters"}
      {filterLength ? <p className="number text-xs">{filterLength}</p> : ""}
    </div>
  );
});

export default ShowHideFilters;
