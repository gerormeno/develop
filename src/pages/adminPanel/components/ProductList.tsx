import { useState, useEffect } from "react";
import NotAvailableImg from "@/assets/adminPanel/picture-not-available.jpg";
import CustomModal from "@/components/CustomModal";
import { Product } from "@/types/product.type";
import { AddIcon, EditIcon, RemoveIcon } from "@/assets/icons";
import ProductThumbnailSkeleton from "./ProductThumbnailSkeleton";
import { deleteProduct } from "@/services/productService";
import { toast } from "react-toastify";

interface ProductListProps {
  products: Product[];
  editProduct: (product: Product) => void;
  createProduct: () => void;
}

const ProductList = ({
  products: initialProducts,
  editProduct,
  createProduct,
}: ProductListProps) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [openModalDeleteProduct, setOpenModalDeleteProduct] = useState<{
    open: boolean;
    product?: Product;
  }>({ open: false });

  const handleOpenModalDeleteProduct = (product: Product) => {
    setOpenModalDeleteProduct({ open: true, product });
  };

  const handleDeleteProduct = async () => {
    if (openModalDeleteProduct.product) {
      try {
        await deleteProduct(openModalDeleteProduct.product);
        setProducts(products.filter(p => p.nombre !== openModalDeleteProduct.product?.nombre));
        setOpenModalDeleteProduct({ open: false });
        toast.success("Producto eliminado con éxito!");
      } catch (e) {
        toast.error("Error al eliminar el producto");
      }
    }
  };

  return (
    <div className="border border-gray-200 align-middle shadow sm:rounded-lg">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="min-w-max border-b border-gray-200 bg-gray-50 px-4 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500"></th>
            <th className="min-w-max border-b border-gray-200 bg-gray-50 px-4 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
              Nombre
            </th>
            <th className="min-w-max border-b border-gray-200 bg-gray-50 px-4 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
              Estado
            </th>
            <th className="min-w-max border-b border-gray-200 bg-gray-50 px-4 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
              Precio mín.
            </th>
            <th className="w-1 border-b border-gray-200 bg-gray-50 px-6 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
              <button
                className="flex h-full w-16 items-center justify-center rounded border px-2 py-2 text-xs text-white hover:scale-105"
                onClick={createProduct}
              >
                <AddIcon />
              </button>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {products.map((product) => (
            <tr key={product.nombre}>
              <td className="w-8 min-w-max whitespace-nowrap border-b border-gray-200 px-2 py-2">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0">
                    <ImageWithSkeleton
                      src={
                        product.fotos && product.fotos.length > 0
                          ? product.fotos[0]
                          : NotAvailableImg
                      }
                    />
                  </div>
                </div>
              </td>
              <td className="whitespace-no-wrap border-b border-gray-200 px-4 py-4">
                <div className="text-sm leading-5 text-gray-900">
                  {product.nombre}
                </div>
                <div className="text-sm leading-5 text-gray-500">
                  {product.categoria}
                </div>
              </td>
              <td className="whitespace-no-wrap min-w-max border-b border-gray-200 px-4 py-4">
                {product.activo ? (
                  <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                    Activo
                  </span>
                ) : (
                  <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
                    Inactivo
                  </span>
                )}
              </td>
              <td className="whitespace-no-wrap min-w-max border-b border-gray-200 px-4 py-4 text-sm leading-5 text-gray-500">
                $ {product.precio.toLocaleString("es-ES")}
              </td>
              <td className="whitespace-no-wrap w-1 border-b border-gray-200 px-6 py-4 text-right text-sm font-medium leading-5">
                <div className="flex justify-between">
                  <button
                    onClick={() => {
                      editProduct(product);
                    }}
                    className="flex items-center hover:scale-110"
                  >
                    <EditIcon />
                  </button>
                  <button
                    className="flex items-center hover:scale-110"
                    onClick={() =>
                      handleOpenModalDeleteProduct(product)
                    }
                  >
                    <RemoveIcon />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <CustomModal
        open={openModalDeleteProduct.open}
        setOpen={() => setOpenModalDeleteProduct({ open: false })}
        title={`Eliminar ${openModalDeleteProduct.product?.nombre} del catálogo`}
        message={`¿Estás seguro de que querés eliminar el producto ${openModalDeleteProduct.product?.nombre}? Esta acción no podrá revertirse.`}
        confirmText="Sí, eliminar"
        cancelText="No, cancelar"
        onConfirm={handleDeleteProduct}
        onCancel={() => setOpenModalDeleteProduct({ open: false })}
      />
    </div>
  );
};

const ImageWithSkeleton = ({ src }: { src: string }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoading(false);
  }, [src]);

  return loading ? (
    <ProductThumbnailSkeleton />
  ) : (
    <img
      className="h-10 w-10 rounded-full object-cover"
      src={src}
      alt=""
    />
  );
};

export default ProductList;