import React, { useState, useEffect, useRef } from "react";
import Banner from "@/components/Banner";
import BannerImg from "@/assets/banners/leaf-waterdrops.webp";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig/firebase";
import ProductForm from "./components/ProductForm";
import ProductTable from "./components/ProductTable";

type FormAction = "CREATE" | "EDIT";

const AdminPanel: React.FC = () => {
  const [showProductForm, setShowProductForm] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const productsCollection = collection(db, "products");
  const [formAction, setFormAction] = useState<FormAction>("CREATE");

  const INITIAL_FORM_STATE: Product = {
    nombre: "",
    precio: 0,
    categoria: "",
    descripcion: "",
    descripcionLarga: "",
    caracteristicas: [],
    fotos: [],
    opciones: [],
    activo: false,
  };

  const getProducts = async () => {
    const productsSnapshot = await getDocs(productsCollection);
    const productsList = productsSnapshot.docs.map((doc) => {
      const data = doc.data() as Product;
      return Object.assign({ id: doc.id }, data);
    });
    productsList.sort((a, b) => {
      if (a.categoria < b.categoria) return -1;
      if (a.categoria > b.categoria) return 1;
      return 0;
    });
    setProducts(productsList);
  };

  const editProduct = (product: any) => {
    setSelectedProduct(product);
    setFormAction("EDIT");
    setShowProductForm(true);
  };

  const createProduct = () => {
    setSelectedProduct(null);
    setFormAction("CREATE");
    setShowProductForm(true);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section>
      <div className="mt-24">
        <Banner
          title="Panel de gestión"
          imgSrc={BannerImg}
          description="Aquí podrás agregar, editar y eliminar tus productos."
        />
      </div>

      <div className="lg:px-8 mb-16 flex justify-center py-2 sm:px-6">
        <div className="w-full overflow-x-auto md:w-3/5">
          <div className="inline-block min-w-full overflow-hidden border-b border-gray-200 align-middle shadow sm:rounded-lg">
            <h1 className="mb-4 mt-8 pl-4 text-3xl font-bold text-black">
              Listado de productos
            </h1>

            <ProductTable
              products={products}
              editProduct={editProduct}
              createProduct={createProduct}
            />
          </div>
        </div>
      </div>

      {showProductForm && (
        <ProductForm
          initialFormState={selectedProduct || INITIAL_FORM_STATE}
          action={formAction}
        />
      )}
    </section>
  );
};

export default AdminPanel;
