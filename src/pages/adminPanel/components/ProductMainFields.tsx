import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import React, { useState, useEffect } from "react";
import Switch from "@/components/Switch";
import { Product } from "@/types/product.type";

type ProductMainFieldsProps = {
  productData: Product;
  handleDataChange: (value: any, field: string) => void;
};

const ProductMainFields: React.FC<ProductMainFieldsProps> = ({
  productData,
  handleDataChange,
}) => {
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isSwitchActive, setIsSwitchActive] = useState(false);
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

  useEffect(() => {
    setSelectedCategory(productData.categoria);
    setIsSwitchActive(productData.activo);
  }, [productData]);

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSwitchActive(event.target.checked);
    handleDataChange(event.target.checked, "activo");
  };

  const handleChangeListBoxValue = (value: string) => {
    setSelectedCategory(value);
    handleDataChange(value, "categoria");
  };
  return (
    <div className="mt-10 grid grid-cols-12 gap-x-4 gap-y-8">
      {/* Nombre */}
      <div className="col-span-4 w-full">
        <label
          htmlFor="product-name"
          className="text-md block font-medium leading-6 text-gray-900"
        >
          Nombre
        </label>
        <div className="mt-2">
          <input
            id="product-name"
            name="product-name"
            type="text"
            value={productData.nombre}
            onChange={(e) => handleDataChange(e.target.value, "nombre")}
            placeholder="Escribí el nombre del producto"
            className="w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      {/* Categoria */}
      <div className="col-span-4 w-full">
        <Listbox value={selectedCategory} onChange={handleChangeListBoxValue}>
          <div className="relative w-full">
            <Label className="text-md mb-2 block font-medium leading-6 text-gray-900">
              Categoría
            </Label>
            <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span
                  className={`ml-3 block truncate ${
                    selectedCategory ? "text-gray-900" : "text-gray-400"
                  }`}
                >
                  {selectedCategory
                    ? selectedCategory
                    : "Seleccioná una categoría"}
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
                  value={category.name}
                  className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                >
                  <div className="flex items-center">
                    <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                      {category.name}
                    </span>
                  </div>

                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                    <CheckIcon aria-hidden="true" className="h-5 w-5" />
                  </span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </div>

      {/* Precio */}
      <div className="col-span-3 w-full">
        <label
          htmlFor="product-price"
          className="text-md mb-2 block font-medium leading-6 text-gray-900"
        >
          Precio
        </label>
        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-900 sm:text-sm">$</span>
          </div>
          <input
            type="number"
            value={productData.precio || ""}
            onChange={(e) => handleDataChange(Number(e.target.value), "precio")}
            placeholder="Ingresá el precio"
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            inputMode="numeric"
            pattern="[0-9]*"
            id="product-price"
            name="product-price"
          />
        </div>
      </div>

      {/* Activo */}
      <div className="col-span-1 w-full">
        <label
          htmlFor="product-stock"
          className="text-md mb-3 block font-medium leading-6 text-gray-900"
        >
          Activo
        </label>
        <Switch
          id="active"
          checked={isSwitchActive}
          onChange={handleSwitchChange}
        />
      </div>

      {/* Descripción */}
      <div className="col-span-full">
        <label
          htmlFor="product-description"
          className="text-md block font-medium leading-6 text-gray-900"
        >
          Descripción
        </label>
        <div className="mt-2">
          <textarea
            id="product-description"
            name="product-description"
            rows={3}
            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={productData.descripcion}
            onChange={(e) => handleDataChange(e.target.value, "descripcion")}
            placeholder="Escribí una breve descripción del producto"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductMainFields;