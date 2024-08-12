import { Product } from "@/data/products";

export const filterByBrand = (product: Product, activeFilters: string[]) => {
  const brands = ["The Ordinary", "Olay", "Dove", "Cerave"];
  return brands.some((brand) => activeFilters.includes(brand))
    ? activeFilters.includes(product.moreInfo.brand)
    : true;
};

export const filterByCategory = (product: Product, activeFilters: string[]) => {
  const categories = ["Makeup", "Skincare", "Soaps"];
  return categories.some((category) => activeFilters.includes(category))
    ? activeFilters.includes(product.tags.category)
    : true;
};

export const filterBySkinType = (product: Product, activeFilters: string[]) => {
  const skinTypes = ["Oily", "Dry", "All skin types"];
  return skinTypes.some((skinType) => activeFilters.includes(skinType))
    ? activeFilters.includes(product.tags.skinType)
    : true;
};
