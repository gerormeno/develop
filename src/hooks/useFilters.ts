// useFilters.ts
import { useCallback, useMemo } from "react";
import { Product, products } from "@/data/products";
import {
  filterByBrand,
  filterByCategory,
  filterBySkinType,
} from "@/pages/catalog/utils/filters";
import { sortProducts } from "@/pages/catalog/utils/sortProducts";

export const useFilters = (
  activeFilters: string[],
  activeSort: string,
  sortType: string
) => {
  const filterProducts = useCallback(
    (product: Product) => {
      return (
        filterByBrand(product, activeFilters) &&
        filterByCategory(product, activeFilters) &&
        filterBySkinType(product, activeFilters)
      );
    },
    [activeFilters]
  );

  return useMemo(() => {
    let filteredProducts = products.filter(filterProducts);
    if (activeSort) {
      filteredProducts = sortProducts(filteredProducts, activeSort, sortType);
    }
    return filteredProducts;
  }, [activeFilters, activeSort, sortType]);
};
