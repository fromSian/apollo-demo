import SelectSimple from "@/components/ui/select-simple";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { UpdateParams } from "../../hooks/useFilter";

type PaginatorProps = {
  page: number;
  total: number;
  size: number;
  updateFilters: (v: UpdateParams) => void;
};
const Paginator = ({ page, size, total, updateFilters }: PaginatorProps) => {
  const { options, maxPage } = useMemo(() => {
    const pageCount = total % size ? Math.ceil(total / size) : total / size;
    const _options = Array.from({
      length: pageCount,
    }).map((_, index) => ({
      label: index + 1 + "",
      value: index + 1 + "",
    }));
    return {
      options: _options,
      maxPage: pageCount,
    };
  }, [total, size]);

  const { from, end } = useMemo(() => {
    let from = (page - 1) * size + 1;
    let end = page == maxPage ? total : page * size;
    return { from, end };
  }, [page, size, maxPage, total]);

  const onValueChange = (value: string) => {
    updateFilters({
      updateArr: [
        {
          key: "page",
          value: +value || 1,
        },
      ],
    });
  };

  const goBefore = () => {
    if (page <= 1) {
      return;
    }
    updateFilters({
      updateArr: [
        {
          key: "page",
          value: +page - 1,
        },
      ],
    });
  };

  const goAfter = () => {
    if (page >= maxPage) {
      return;
    }
    updateFilters({
      updateArr: [
        {
          key: "page",
          value: +page + 1,
        },
      ],
    });
  };

  return (
    <div className="paginator border-t flex items-center gap-6 px-4">
      <button
        className={twMerge(
          "hover-gray-pagi scale-x-75",
          page <= 1
            ? "hover-gray-pagi-disable cursor-not-allowed"
            : "hover:bg-hover_gray"
        )}
        onClick={goBefore}
      >
        {"<"}
      </button>
      <SelectSimple
        className="w-24 h-8"
        value={`${page}`}
        onValueChange={onValueChange}
        options={options}
      />
      <button
        className={twMerge(
          "hover-gray-pagi scale-x-75",
          page >= maxPage
            ? "hover-gray-pagi-disable cursor-not-allowed"
            : "hover:bg-hover_gray"
        )}
        onClick={goAfter}
      >
        {">"}
      </button>
      <p className="text-sm">
        {page < 1 || page > maxPage
          ? "not valid page"
          : `${from} - ${end} of ${total}`}
      </p>
    </div>
  );
};

export default Paginator;
