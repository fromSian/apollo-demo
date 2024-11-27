import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

/** 參數驗證
 *
 * 驗證❌可以有彈窗錯誤參數框或忽略錯誤兩種方式
 */

const validateFilterMethod = {};

/** 默認參數 */

const defaultFilters = {
  page: 1,
  size: 25,
  type: "total",
};

type DefaultFilterKeys = keyof typeof defaultFilters;

export type UpdateItem = {
  key: string;
  value: unknown;
};

type UpdateArr = UpdateItem[];

export type UpdateParams = { updateArr?: UpdateArr; removeKeys?: string[] };

/**
 * handle search params and filters relation
 * @param names keys 查詢參數keys
 * @returns
 */
export const useSearchParamsFilterPartial = <T extends Object>(
  names: (keyof T)[],
  mustHasOne?: (keyof T)[]
) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filtersRef = useRef(new Map());

  const [params, setParams] = useState<T>();
  const [isFilled, setIsFilled] = useState(false);
  const fillStatusRef = useRef(false);

  const getParsedFilters = useCallback(() => {
    fillStatusRef.current = false;
    names.forEach((key) => {
      if (searchParams.has(String(key))) {
        const value = searchParams.get(String(key));
        const _value = JSON.parse(value || "null");
        filtersRef.current.set(key, _value);
        if (_value && mustHasOne?.includes(key) && !fillStatusRef.current) {
          fillStatusRef.current = true;
        }
      } else if (defaultFilters.hasOwnProperty(key)) {
        filtersRef.current.set(key, defaultFilters[key as DefaultFilterKeys]);
      } else {
        filtersRef.current.delete(key);
      }
    });
    setIsFilled(fillStatusRef.current);
    setParams(Object.fromEntries(filtersRef.current.entries()));
  }, [searchParams]);

  useEffect(() => {
    getParsedFilters();
  }, [getParsedFilters]);

  const updateFilters = useCallback(
    (
      { updateArr, removeKeys }: UpdateParams = {
        updateArr: [],
        removeKeys: [],
      }
    ) => {
      setSearchParams((params) => {
        updateArr?.length &&
          updateArr.forEach((item, index) => {
            const { key, value } = item;
            params.set(key, JSON.stringify(value));
          });
        removeKeys?.length &&
          removeKeys.forEach((key) => {
            if (params.has(key)) {
              params.delete(key);
            }
          });
        return params;
      });
    },
    []
  );

  return {
    isFilled,
    params,
    updateFilters,
  };
};
