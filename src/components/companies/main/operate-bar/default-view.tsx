import PlaceHolder from "@/components/common/placeholder";
import DropdownSimple from "@/components/ui/dropdown-simple";
import { GridIcon } from "@radix-ui/react-icons";

const DefaultView = () => {
  return (
    <DropdownSimple
      content={<PlaceHolder />}
      className="text-button flex gap-1 items-center"
    >
      <>
        <GridIcon />
        Default View
      </>
    </DropdownSimple>
  );
};

export default DefaultView;
