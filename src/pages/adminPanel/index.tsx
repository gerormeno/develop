import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "@/components/Banner";
import BannerImg from "@/assets/banners/leaf-waterdrops.webp";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import ProductListSkeleton from "./components/ProductListSkeleton";
import { Product } from "@/types/product.type";
import { getProducts } from "@/services/productService";

type FormAction = "CREATE" | "EDIT";

const AdminPanel: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showProductForm, setShowProductForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [formAction, setFormAction] = useState<FormAction>("CREATE");

  const INITIAL_FORM_STATE: Product = {
    nombre: "",
    precio: 0,
    categoria: "",
    descripcion: "",
    caracteristicas: [],
    fotos: [],
    opciones: [],
    activo: false,
    linkTutorial: "",
  };

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const productsList = await getProducts();
      setProducts(productsList);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const editProduct = (product: any) => {
    setSelectedProduct(product);
    setFormAction("EDIT");
    setShowProductForm(true);
    AOS.refresh();
  };

  const createProduct = () => {
    setSelectedProduct(null);
    setFormAction("CREATE");
    setShowProductForm(true);
    AOS.refresh();
  };

  const handleSave = () => {
    AOS.refresh();
    setShowProductForm(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchProducts();
  };

  const handleCancel = () => {
    AOS.refresh();
    setShowProductForm(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    fetchProducts();
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div className="mt-24">
        <Banner
          title="¡Bienvenido, administrador!"
          imgSrc={BannerImg}
          description="Acá podés agregar, editar y eliminar tus productos."
        />
      </div>

      <div className="lg:px-8 mb-12 flex justify-center py-2 sm:px-6">
        <div className="w-full overflow-x-auto">
          <div className="mx-auto max-w-4xl sm:rounded-lg">
            {showProductForm ? (
              <div>
                <ProductForm
                  initialFormState={selectedProduct || INITIAL_FORM_STATE}
                  action={formAction}
                  onSave={handleSave}
                  onCancel={handleCancel}
                />
              </div>
            ) : (
              <div>
                <h2 className="mb-8 mt-8 text-center text-4xl font-bold tracking-tight text-black">
                  Listado de productos
                </h2>
                <div data-aos="zoom-in">
                  {isLoading ? (
                    <ProductListSkeleton />
                  ) : (
                    <ProductList
                      products={products}
                      editProduct={editProduct}
                      createProduct={createProduct}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* DIV DE PRUEBA PARA VER EL TAMAÑO DE LA PANTALLA */}
      <div className="text-col-span-full mt-4 bg-pink-300 text-center">
        <span className="block sm:hidden">
          Esta es una pantalla de tamaño: XS
        </span>
        <span className="hidden sm:block md:hidden">
          Esta es una pantalla de tamaño: SM
        </span>
        <span className="lg:hidden hidden md:block">
          Esta es una pantalla de tamaño: MD
        </span>
        <span className="lg:block xl:hidden hidden">
          Esta es una pantalla de tamaño: LG
        </span>
        <span className="xl:block 2xl:hidden hidden">
          Esta es una pantalla de tamaño: XL
        </span>
        <span className="2xl:block hidden">
          Esta es una pantalla de tamaño: - 2XL
        </span>
      </div>
    </div>
  );
};

export default AdminPanel;
