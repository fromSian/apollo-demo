import { useCompaniesUI } from "@/stores/companies-ui";
import { SpaceBetweenHorizontallyIcon } from "@radix-ui/react-icons";
const count = 10;

const ShowHideFilters = () => {
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
      {count && (
        <p className="bg-hover_gray rounded-full text-xs  w-4 h-4 text-center align-middle">
          {count}
        </p>
      )}
    </div>
  );
};

export default ShowHideFilters;
