import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TooltipSimple from "@/components/ui/tooltip-simple";
import { LockClosedIcon } from "@radix-ui/react-icons";
import { Link2Icon } from "lucide-react";
import { Config } from "./config";

type ItemHiddenProps<T> = {
  config: Config<T>;
};

const ItemHidden = <T,>({ config }: ItemHiddenProps<T>) => {
  return (
    <AccordionItem value={config.id} className="">
      <div className="flex justify-between items-center p-4 bg-light_gray rounded-md cursor-pointer hover:text-heavy_blue transition">
        <div className="flex gap-2 items-center">
          {config.Icon || <Link2Icon />}
          <TooltipSimple content={config.description}>
            {config.name}
          </TooltipSimple>
        </div>
        <LockClosedIcon />
      </div>
    </AccordionItem>
  );
};

export default ItemHidden;
