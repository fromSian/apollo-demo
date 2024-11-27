import PlaceHolder from "@/components/common/placeholder";
import DropdownSimple from "@/components/ui/dropdown-simple";
import { CaretSortIcon, GridIcon } from "@radix-ui/react-icons";

const Sort = () => {
  return (
    <DropdownSimple
      content={<PlaceHolder />}
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
