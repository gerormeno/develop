import ProductCard from "./components/ProductCard";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig/firebase";
import ProductSkeleton from "./components/ProductSkeleton";
import GenericProductImage from "@/assets/adminPanel/picture-not-available.jpg";

const Catalog = () => {
  const [products, setProducts] = useState<any[]>([]);
  const productsCollection = collection(db, "products");
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    const productsSnapshot = await getDocs(productsCollection);
    const productsList = productsSnapshot.docs.map((doc) => doc.data());
    setProducts(productsList);
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="bg-background-primary pt-24">
      <section className="pt-10">
        <div className="mx-auto w-full px-4">
          <div className="col-span-12 md:col-span-9">
            <div className="mx-5 flex flex-wrap">
              {isLoading ? (
                <>
                <ProductSkeleton />
                <ProductSkeleton />
                <ProductSkeleton />
                </>
              ) : (
                products.map((product:Product) => (
                  <ProductCard
                    key={product.id}
                    name={product.nombre}
                    picture={product.fotos ? product.fotos[0] : GenericProductImage}
                    price={product.precio}
                    id={product.nombre}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalog;
