import InputExtra from "@/components/ui/input-extra";
import React, {
  KeyboardEvent,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { UpdateFilters } from "../../hooks/useFilter";

const Search = memo(
  ({
    search,
    updateFilters,
  }: {
    search: string;
    updateFilters: UpdateFilters;
  }) => {
    const [value, setValue] = useState(search);

    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const handleSearch = useCallback(() => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        updateFilters(
          value
            ? {
                updateArr: [{ key: "search", value }],
              }
            : {
                removeKeys: ["search"],
              }
        );
      }, 200);
      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      };
    }, [value]);

    useEffect(() => {
      setValue(search);
    }, [search]);

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    };
    return (
      <div>
        <InputExtra
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onEnter}
        />
      </div>
    );
  }
);

export default Search;
