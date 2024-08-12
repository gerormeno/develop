import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Filters {
  activeFilters: string[];
  activeSort: string | null;
  sortType: "asc" | "desc";
}

const initialState: Filters = {
  activeFilters: [],
  activeSort: null,
  sortType: "asc",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<string[]>) {
      state.activeFilters = action.payload;
    },
    setSingleFilter(state, action: PayloadAction<string>) {
      state.activeFilters = [action.payload];
    },
    setSort(state, action: PayloadAction<string>) {
      state.activeSort = action.payload;
    },
    invertSort(state) {
      state.sortType = state.sortType === "asc" ? "desc" : "asc";
    }
  },
});

export const { setFilters, setSingleFilter, setSort, invertSort } = filtersSlice.actions;
export default filtersSlice.reducer;
