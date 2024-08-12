// useProductSelection.ts
import { useSelector } from "react-redux";

interface FiltersState {
    filters: {
        activeFilters: string[];
        activeSort: string;
        sortType: string;
    };
}

export const useProductSelection = () => {
    const activeFilters = useSelector(
        (state: FiltersState) => state.filters.activeFilters
    );
    const activeSort = useSelector(
        (state: FiltersState) => state.filters.activeSort
    );
    const sortType = useSelector((state: FiltersState) => state.filters.sortType);

    return { activeFilters, activeSort, sortType };
};
