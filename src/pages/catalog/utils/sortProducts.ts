import { Product } from "@/data/products";

export const sortProducts = (
  products: Product[],
  activeSort: string,
  sortType: string
) => {
  let sortedProducts = [...products];
  if (activeSort === "Price") {
    sortedProducts.sort((a, b) => {
      if (sortType === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }
  if (activeSort === "A - Z") {
    sortedProducts.sort((a, b) => {
      if (sortType === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  }
  return sortedProducts;
};
