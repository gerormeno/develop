import { useCallback, useMemo } from "react";
import { sortProducts } from "@/pages/catalog/utils/sortProducts";
import { filterByCategory } from "@/pages/catalog/utils/filters";
import { Product } from "@/types/product.type";

export const useFilters = (
  activeFilters: string[],
  activeSort: string,
  sortType: string,
  products: Product[]
) => {
  const filterProducts = useCallback(
    (product: Product) => {
      return filterByCategory(product, activeFilters);
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
