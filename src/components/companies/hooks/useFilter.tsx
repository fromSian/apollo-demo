import { useCompaniesUI } from "@/stores/companies-ui";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SetURLSearchParams, useSearchParams } from "react-router-dom";

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
export type UpdateFilters = (v: UpdateParams) => void;
export type ParamsConfig<T> = {
  isFilled: boolean;
  params: T;
};
/**
 * handle search params and filters relation
 * @param names keys 查詢參數keys
 * @returns
 */
export const useSearchParamsFilterPartial = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getParsedFilters = useCallback(
    <T,>(names: (keyof T)[], mustHasOne?: (keyof T)[]) => {
      let params: T = {} as T;
      let isFilled = mustHasOne && mustHasOne.length ? false : true;
      const _searchParams = Object.fromEntries(searchParams.entries());
      names.forEach((key) => {
        if (_searchParams.hasOwnProperty(key)) {
          const value = _searchParams[key as string];
          params[key] = value as T[keyof T];
          if (value && mustHasOne?.includes(key) && !isFilled) {
            isFilled = true;
          }
        } else if (defaultFilters.hasOwnProperty(key)) {
          params[key] = defaultFilters[key as DefaultFilterKeys] as T[keyof T];
        }
      });
      return {
        isFilled,
        params,
      };
    },
    [searchParams]
  );

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
            params.set(key, value as string);
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
    updateFilters,
    getParsedFilters,
  };
};
