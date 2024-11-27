import {
  UpdateFilters,
  useSearchParamsFilterPartial,
} from "@/components/companies/hooks/useFilter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TooltipSimple from "@/components/ui/tooltip-simple";
import { Cross1Icon, Link2Icon } from "@radix-ui/react-icons";
import { memo, MouseEvent, ReactNode, Suspense, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { Config } from "./config";

type ItemVisibleProps<T extends Object> = {
  config: Config<T>;
  updateFilters: UpdateFilters;
};
const ItemVisible = memo(
  <T extends Object>({ config, updateFilters }: ItemVisibleProps<T>) => {
    /** 驗證params是否有效 */

    const handleRemoveFilter = (e: MouseEvent) => {
      e.stopPropagation();
      updateFilters({
        removeKeys: config.keys,
      });
    };

    return (
      <AccordionItem value={config.id}>
        <AccordionTrigger
          asChild
          className="p-4 flex justify-between items-center rounded-md cursor-pointer hover:text-heavy_blue transition hover:bg-light_gray hover:no-underline"
        >
          <>
            <div className="flex gap-2 items-center font-normal flex-1">
              {config.Icon || <Link2Icon />}
              <TooltipSimple content={config.description}>
                {config.name}
              </TooltipSimple>
            </div>
            {config.params && Object.keys(config.params).length ? (
              <p
                onClick={handleRemoveFilter}
                className="text-sm border mr-4 rounded-lg px-1 bg-white flex gap-1 items-center"
              >
                <Cross1Icon />
                {Object.keys(config.params).length}
              </p>
            ) : (
              ""
            )}
          </>
        </AccordionTrigger>
        <AccordionContent asChild>
          <config.DetailComponent
            params={config.params}
            updateFilters={updateFilters}
          />
        </AccordionContent>
      </AccordionItem>
    );
  }
);

export default ItemVisible;
