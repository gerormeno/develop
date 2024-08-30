import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions, } from "@headlessui/react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import ProductFeaturesList from "@/pages/productManager/components/ProductFeaturesList";
import { useState } from "react";
import OptionsTable from "./OptionsTable";
import { Product } from "@/types/product.type";
import { deleteObject, getDownloadURL, ref, uploadBytes, } from "firebase/storage";
import { storage } from "@/firebase-config";
import CustomModal from "@/components/CustomModal";
import Switch from "@/components/Switch";
import YoutubeThumbnail from "./YoutubeThumbnail";

type ProductFormProps = {
  initialFormState: Product;
  action: "CREATE" | "EDIT";
};

const ProductForm: React.FC<ProductFormProps> = ({ initialFormState, action }) => {
  const categories = [
    {
      id: 1,
      name: "Lámparas",
    },
    {
      id: 2,
      name: "Humidificadores",
    },
    {
      id: 3,
      name: "Poleas",
    },
    {
      id: 4,
      name: "Ventiladores",
    },
    {
      id: 5,
      name: "Otros",
    },
  ];

  const [selected, setSelected] = useState(categories[0]);
  const [formState, setFormState] = useState<Product>(initialFormState);
  const [openModalCancel, setOpenModalCancel] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleChange = (value: any, inputName: string) => {
    setFormState({
      ...formState,
      [inputName]: value,
    });
  };
  
  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsActive(event.target.checked);
  };

  const handleChangeListBoxValue = (value: any) => {
    setSelected(value);
    handleChange(value, "categoria");
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const storageRef = ref(storage, `uploadedProducts/${file.name}`);

      uploadBytes(storageRef, file)
        .then(() => {
          // Obtener la URL de descarga de la imagen
          getDownloadURL(storageRef)
            .then((url) => {
              setFormState({
                ...formState,
                fotos: [...formState.fotos, url],
              });
            })
            .catch((error) => {
              console.error("Error al obtener la URL de descarga:", error);
            });
        })
        .catch((error) => {
          console.error("Error al subir la imagen:", error);
        });
    }
  };

  const deleteImage = async (imageUrl: string) => {
    try {
      const storageRef = ref(storage, imageUrl);

      await deleteObject(storageRef);

      setFormState({
        ...formState,
        fotos: formState.fotos.filter((url) => url !== imageUrl),
      });

      console.log("Image deleted successfully!");
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-4xl pb-8">
        <div className="space-y-12">
          <div className="">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

              <div className="col-span-full">
                <h1 className="mb-4 mt-8 pl-1 text-3xl font-bold text-black">
                  {`${action === "CREATE" ? "Crear" : "Modificar"} Producto`}
                </h1>
                <p className="mt-1 pl-1 text-sm leading-6 text-gray-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit
                  minima? Quibusdam aut minima cumque earum voluptate.
                </p>
              </div>

              
              <div className="col-span-3">
                <label
                  htmlFor="product-name"
                  className="block text-md font-medium leading-6 text-gray-900"
                >
                  Nombre
                </label>
                <div className="mt-2">
                  <input
                    id="product-name"
                    name="product-name"
                    type="text"
                    value={formState.nombre}
                    onChange={(e) => handleChange(e.target.value, "nombre")}
                    autoComplete="street-address"
                    className="w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <div className="flex space-x-4">
                  
                  <Listbox
                    value={selected}
                    onChange={(value) => handleChangeListBoxValue(value)}>
                    <div className="relative w-64">
                      <Label className="mb-2 block text-md font-medium leading-6 text-gray-900">
                        Categoría
                      </Label>
                      <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                        <span className="flex items-center">
                          <span className="ml-3 block truncate">
                            {selected.name}
                          </span>
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                          <ChevronUpDownIcon
                            aria-hidden="true"
                            className="h-5 w-5 text-gray-400"
                          />
                        </span>
                      </ListboxButton>

                      <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm">
                        {categories.map((category) => (
                          <ListboxOption
                            key={category.id}
                            value={category}
                            className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                          >
                            <div className="flex items-center">
                              <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                                {category.name}
                              </span>
                            </div>

                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                              <CheckIcon
                                aria-hidden="true"
                                className="h-5 w-5"
                              />
                            </span>
                          </ListboxOption>
                        ))}
                      </ListboxOptions>
                    </div>
                  </Listbox>

                  <div className="flex-1">
                    <label
                      htmlFor="product-price"
                      className="mb-2 block text-md font-medium leading-6 text-gray-900">
                      Precio
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <input
                        id="product-price"
                        name="product-price"
                        type="text"
                        placeholder="0.00"
                        value={formState.precio.toLocaleString("es-ES")}
                        onChange={(e) => handleChange(e.target.value, "precio")}
                        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="product-stock"
                      className="mb-2 block text-md font-medium leading-6 text-gray-900"
                    >
                      Activo
                    </label>
                    <Switch
                      id="active"
                      checked={isActive}
                      onChange={handleSwitchChange}
                    />
                  </div>

                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="product-description"
                  className="block text-md font-medium leading-6 text-gray-900"
                >
                  Descripción
                </label>
                <div className="mt-2">
                  <textarea
                    id="product-description"
                    name="product-description"
                    rows={3}
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={formState.descripcion}
                    onChange={(e) =>
                      handleChange(e.target.value, "descripcion")
                    }
                    placeholder="Escribí una breve descripción del producto."
                  />
                </div>
              </div>


              <div className="col-span-full">
                <ProductFeaturesList
                  value={formState.caracteristicas}
                  onChange={(value) => handleChange(value, "caracteristicas")}
                />
              </div>

              <div className="col-span-full">
                <OptionsTable
                  options={formState.opciones}
                  editOption={() => {}}
                  createOption={() => {}}
                />
              </div>

              {/* Imagenes */}
              <div className="col-span-full">
                <label
                  htmlFor="product-images"
                  className="block text-md font-medium leading-6 text-gray-900">
                  Imágenes
                </label>
                <div className="flex flex-col items-center">
                  <div className="flex w-full flex-col items-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <PhotoIcon
                      aria-hidden="true"
                      className="h-12 w-12 text-gray-300"
                    />
                    <div className="mt-4 flex flex-col items-center text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Subí tus archivos</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={(e) => handleFileChange(e)}
                        />
                      </label>
                      <p className="mt-1">o arrastrá y soltá</p>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF hasta 10MB
                    </p>
                  </div>
                  {formState.fotos && formState.fotos.length > 0 && (
                    <div className="mt-0 flex w-full flex-col items-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      <div className="lg:grid-cols-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {formState.fotos.map((image, index) => (
                          <div
                            key={index}
                            className="relative h-48 w-48 transform overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                          >
                            <img
                              src={image}
                              alt={`Image ${index + 1}`}
                              className="h-full w-full object-cover"
                            />
                            <button
                              onClick={() => deleteImage(image)}
                              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 hover:opacity-100"
                            >
                              Eliminar
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <YoutubeThumbnail />
            </div>
          </div>

          {/* Buttons */}
          <div className=" mt-6 flex items-center justify-end gap-x-6 border-t border-gray-900/10 pt-8 pb-4">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={() => setOpenModalCancel(true)}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Guardar
            </button>
          </div>

        </div>
      </div>
      <CustomModal
        open={openModalCancel}
        setOpen={setOpenModalCancel}
        title="Cancelar"
        message={`¿Estás seguro que deseas cancelar la ${action === "CREATE" ? "creación" : "edición"} de este producto?`}
        confirmText="Sí, cancelar"
        cancelText="No, continuar"
      />
    </>
  );
};

export default ProductForm;
