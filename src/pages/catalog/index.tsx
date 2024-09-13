import ProductCard from "./components/ProductCard";
import { useEffect, useState } from "react";
import ProductSkeleton from "./components/ProductSkeleton";
import GenericProductImage from "@/assets/adminPanel/picture-not-available.jpg";
import { Product } from "@/types/product.type";
import Filters from "./components/Filters";
import { useProductSelection } from "@/hooks/useProductSelection";
import { sortProducts } from "./utils/sortProducts";
import Aos from "aos";
import { getProducts } from "@/services/productService";

const Catalog = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { activeFilters, activeSort, sortType } = useProductSelection();
  const [catalogProducts, setCatalogProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const productsList = await getProducts();
    setProducts(productsList);
    if (activeFilters) {
      const filteredProducts = orderAndFilterProducts(productsList);
      setCatalogProducts(filteredProducts);
    } else {
      setCatalogProducts(productsList);
    }
    setIsLoading(false);
  };

  const orderAndFilterProducts = (products: Product[]) => {
    if (activeSort) {
      products = sortProducts(products, activeSort, sortType);
    }
    if (activeFilters.length > 0) {
      products = products.filter((product) =>
        activeFilters.includes(product.categoria)
      );
    }
    return products;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setCatalogProducts(orderAndFilterProducts(products));
  }, [activeFilters, activeSort, sortType]);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="lg:px-8 mx-auto">
      <div className="relative h-full w-full overflow-hidden">
        <div
          aria-hidden="true"
          className="overflow absolute inset-0 bg-cover bg-fixed bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1591754060004-f91c95f5cf05?auto=format&fit=crop&w=2880')",
          }}
        ></div>
        <div className="lg:px-16 relative flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-75 px-3 py-20 sm:px-12">
          <div className="relative mx-auto flex max-w-7xl flex-col items-center pt-20 text-center">
            <div data-aos="zoom-in-left">
              <h2
                id="social-impact-heading"
                className="text-4xl font-medium tracking-tight text-white sm:text-6xl"
              >
                <span className="block sm:inline">Nuestros productos</span>
              </h2>
            </div>
          <div data-aos="zoom-in-right">
            <p className="mt-3 max-w-3xl text-lg font-thin text-gray-300">
              Todos nuestros productos están realizados impresos en 3D con
              filamento PETg, el cual a diferencia de otros filamentos es mucho
              más resistente a las temperaturas, por lo que no se deforma con
              los ciclos térmicos, y también mucho más resistentes a los
              esfuerzos cortantes y de demás solicitaciones.
            </p>
          </div>

            <div className="mx-auto mt-10 w-full rounded-2xl bg-black bg-opacity-40 px-10 py-5 backdrop-blur-md backdrop-filter">
              <div className="mx-auto w-full">
                <Filters />
                <div className="mx-auto mb-5 grid w-fit grid-cols-2 justify-center justify-items-center gap-x-14 md:grid-cols-3 md:gap-y-5">
                  {isLoading ? (
                    <>
                      <ProductSkeleton />
                      <ProductSkeleton />
                      <ProductSkeleton />
                      <ProductSkeleton />
                      <ProductSkeleton />
                      <ProductSkeleton />
                    </>
                  ) : (
                    catalogProducts.map((product: Product) => (
                      <ProductCard
                        key={product.nombre}
                        name={product.nombre}
                        category={product.categoria}
                        picture={
                          product.fotos ? product.fotos[0] : GenericProductImage
                        }
                        price={product.precio}
                        id={product.nombre}
                      />
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
