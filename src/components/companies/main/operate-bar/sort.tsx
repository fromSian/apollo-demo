import DropdownSimple from "@/components/ui/dropdown-simple";
import { CaretSortIcon, GridIcon } from "@radix-ui/react-icons";

const Sort = () => {
  return (
    <DropdownSimple
      content={<div>sort content</div>}
      className="text-button flex gap-1 items-center"
    >
      <>
        <CaretSortIcon />
        Sort
      </>
    </DropdownSimple>
  );
};

export default Sort;
