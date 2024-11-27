import SelectSimple from "@/components/ui/select-simple";
import { memo, MouseEvent, useEffect, useMemo, useState } from "react";
import { DetailComponentProps } from "../config";

const options = [
  {
    label: "option1",
    value: "option1",
  },
  {
    label: "option2",
    value: "option2",
  },
  {
    label: "option3",
    value: "option3",
  },
];

const Location = memo(
  ({ params, updateFilters }: DetailComponentProps<{ location: string }>) => {
    const { location } = params || {};

    const handleChange = (value: string) => {
      if (value !== location) {
        updateFilters(
          value
            ? {
                updateArr: [{ key: "location", value }],
              }
            : { removeKeys: ["location"] }
        );
      }
    };
    const value = useMemo(() => location || "", [location]);

    return (
      <div className="p-4 w-full">
        <SelectSimple
          options={options}
          placeholder="please select"
          value={value}
          onValueChange={handleChange}
        />
      </div>
    );
  },
  (prev, curr) => JSON.stringify(prev?.params) === JSON.stringify(curr?.params)
);

export default Location;
