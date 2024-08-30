import { Product } from "@/types/product.type";

export const filterByCategory = (product: Product, activeFilters: string[]) => {
  const categories = ['Lámparas', "Ventiladores", 'Humidificadores', "Poleas"];
  return categories.some((category) => activeFilters.includes(category))
    ? activeFilters.includes(product.categoria)
    : true;
};
