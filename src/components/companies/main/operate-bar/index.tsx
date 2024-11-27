import DefaultView from "./default-view";
import SaveSearch from "./save-search";
import Search from "./search";
import SearchSettings from "./search-settings";
import SelectionBar from "./selection-bar";
import ShowHideFilters from "./show-hide-filters";
import Sort from "./sort";

const OperateBar = () => {
  return (
    <div className="operate-bar border-b flex  items-center justify-between px-4 relative">
      <div className="flex gap-3 items-center">
        <DefaultView />
        <ShowHideFilters />
        <Search />
      </div>
      <div className="flex gap-3 items-center">
        <SaveSearch />
        <Sort />
        <SearchSettings />
      </div>

      <SelectionBar />
    </div>
  );
};

export default OperateBar;
