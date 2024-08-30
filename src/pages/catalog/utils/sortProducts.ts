import { Product } from "@/types/product.type.ts";

export const sortProducts = (
  products: Product[],
  activeSort: string,
  sortType: string
) => {
  let sortedProducts = [...products];
  if (activeSort === "Price") {
    sortedProducts.sort((a, b) => {
      if (sortType === "asc") {
        return a.precio - b.precio;
      } else {
        return b.precio - a.precio;
      }
    });
  }
  if (activeSort === "A - Z") {
    sortedProducts.sort((a, b) => {
      if (sortType === "asc") {
        return a.nombre.localeCompare(b.nombre);
      } else {
        return b.nombre.localeCompare(a.nombre);
      }
    });
  }
  return sortedProducts;
};
