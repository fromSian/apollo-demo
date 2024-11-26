import { create } from "zustand";

type CompaniesUI = {
  showfilterSide: boolean;
  toggleShowFilterShow: () => void;
  showMoreFilter: boolean;
  toggleShowMoreFilter: () => void;
};

export const useCompaniesUI = create<CompaniesUI>()((set, get) => ({
  showfilterSide: true,
  toggleShowFilterShow: () =>
    set((state) => ({ showfilterSide: !state.showfilterSide })),

  showMoreFilter: false,
  toggleShowMoreFilter: () =>
    set((state) => ({ showMoreFilter: !state.showMoreFilter })),
}));
