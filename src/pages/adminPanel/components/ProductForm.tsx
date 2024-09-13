import { useEffect, useState } from "react";
import { Product } from "@/types/product.type";
import { toast } from "react-toastify";
import CustomModal from "@/components/CustomModal";
import YoutubeThumbnail from "./YoutubeThumbnail";
import ImageUploader from "./ImageUploader";
import ProductFeaturesList from "./ProductFeaturesList";
import ProductOptionsList from "./ProductOptionsList";
import ProductMainFields from "./ProductMainFields";
import { validateProduct } from "./ProductValidator";
import { addProduct, updateProduct } from "@/services/productService";

type ProductFormProps = {
  initialFormState: Product;
  action: "CREATE" | "EDIT";
  onSave: () => void;
  onCancel: () => void;
};

const ProductForm: React.FC<ProductFormProps> = ({
  initialFormState,
  action,
  onSave,
  onCancel,
}) => {
  const [productData, updateProductData] = useState<Product>(initialFormState);
  const [openModalCancel, setOpenModalCancel] = useState(false);
  const [originalProductName, setOriginalProductName] = useState<string>("");
  const [validate, setValidate] = useState<boolean>(false);
  const [imagesToUpload, setImagesToUpload] = useState<File[]>([]);
  const [newImageUrls, setNewImageUrls] = useState<string[]>([]);
  const [isSaving, setIsSaving] = useState(false);

  const handleDataChange = (value: any, field: string) => {
    updateProductData({
      ...productData,
      [field]: value,
    });
  };

  const handleAddImage = (
    event: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>
  ) => {
    event.preventDefault();

    let files: File[] = [];

    if (event.type === "change") {
      const inputEvent = event as React.ChangeEvent<HTMLInputElement>;
      if (inputEvent.target.files) {
        files = Array.from(inputEvent.target.files);
      }
    } else if (event.type === "drop") {
      const dropEvent = event as React.DragEvent<HTMLDivElement>;
      if (dropEvent.dataTransfer.files) {
        files = Array.from(dropEvent.dataTransfer.files);
      }
    }

    if (files.length > 0) {
      setImagesToUpload((prevFiles) => [...prevFiles, ...files]);
      const fileUrls = files.map((file) => URL.createObjectURL(file));
      setNewImageUrls((prevUrls) => [...prevUrls, ...fileUrls]);
    }
  };

  const handleDeleteImage = (imageUrl: string) => {
    if (productData.fotos.includes(imageUrl)) {
      updateProductData({
        ...productData,
        fotos: productData.fotos.filter((url) => url !== imageUrl),
      });
    } else {
      setNewImageUrls((prevUrls) => prevUrls.filter((url) => url !== imageUrl));
      setImagesToUpload((prevFiles) => {
        const index = newImageUrls.indexOf(imageUrl);
        if (index !== -1) {
          const newFiles = [...prevFiles];
          newFiles.splice(index, 1);
          return newFiles;
        }
        return prevFiles;
      });
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    validateProduct(
      productData,
      async (isValid, message) => {
        if (!isValid) {
          toast.error(message);
          setIsSaving(false);
          return;
        }

        try {
          if (action === "CREATE") {
            await addProduct(productData, imagesToUpload);
            toast.success("Producto creado con éxito!");
          } else if (action === "EDIT") {
            await updateProduct(productData, imagesToUpload);
            toast.success("Producto actualizado con éxito!");
          }
          onSave();
        } catch (error) {
          toast.error(`Error al guardar el producto`);
        } finally {
          setIsSaving(false);
        }
      },
      imagesToUpload
    );
  };

  useEffect(() => {
    setOriginalProductName(initialFormState.nombre);
  }, [initialFormState]);

  return (
    <>
      <div className="mx-auto max-w-4xl">
        <div className="space-y-10">
          {/* Form title */}
          <div className="col-span-full">
            <h1 className="mb-8 mt-8 text-center text-4xl font-bold tracking-tight text-black">
              {`${
                action === "CREATE"
                  ? "Agregar producto"
                  : `Modificar producto: ${originalProductName}`
              }`}
            </h1>
            <p className="mt-1 pl-1 text-center text-sm leading-6 text-gray-600">
              <strong className="text-red-600">¡IMPORTANTE! </strong>
              Acordate de revisar que todos los datos sean correctos antes de
              guardar.
            </p>
          </div>

          <ProductMainFields
            productData={productData}
            handleDataChange={handleDataChange}
          />

          <ProductFeaturesList
            value={productData.caracteristicas}
            onChange={(value) => handleDataChange(value, "caracteristicas")}
          />

          <ProductOptionsList
            value={productData.opciones}
            updateList={(value) => handleDataChange(value, "opciones")}
          />

          <ImageUploader
            fotos={[...productData.fotos, ...newImageUrls]}
            addImage={handleAddImage}
            deleteImage={handleDeleteImage}
          />

          <YoutubeThumbnail
            link={productData.linkTutorial}
            onLinkChange={(value) => handleDataChange(value, "linkTutorial")}
          />

          {/* Form footer */}
          <div className="mt-6 flex items-center justify-end gap-x-6 border-t border-gray-900/10 py-8">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={() => setOpenModalCancel(true)}
              disabled={isSaving}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleSave}
              disabled={isSaving}
            >
              {isSaving ? "Guardando..." : "Guardar"}
            </button>
          </div>
        </div>
      </div>

      {/* Validator */}
      {validate &&
        validateProduct(
          productData,
          (isValid, validationMessage) => {
            if (!isValid) {
              console.error("Error de validación:", validationMessage);
              const toastId = `validation-error-${validationMessage}`;
              if (!toast.isActive(toastId)) {
                toast.error(validationMessage, { toastId });
              }
            }
            setValidate(false);
          },
          imagesToUpload
        )}

      <CustomModal
        open={openModalCancel}
        setOpen={setOpenModalCancel}
        title="Cancelar"
        message={`¿Estás seguro de que querés cancelar la ${
          action === "CREATE" ? "creación" : "edición"
        } de este producto?`}
        confirmText="Sí, cancelar"
        cancelText="No, continuar"
        onConfirm={() => {
          setOpenModalCancel(false);
          onCancel();
        }}
        onCancel={() => {
          setOpenModalCancel(false);
        }}
      />
    </>
  );
};

export default ProductForm;
