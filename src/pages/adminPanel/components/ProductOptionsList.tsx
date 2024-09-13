import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ProductOption } from "@/types/product.type";
import CustomModal from "@/components/CustomModal";
import {
  AddIcon,
  EditIcon,
  RemoveIcon,
  ConfirmEditIcon,
  CancelEditIcon,
  ConfirmAddIcon,
  CancelAddIcon,
} from "@/assets/icons";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

interface ProductOptionsListProps {
  value: ProductOption[];
  updateList: (newValue: ProductOption[]) => void;
}

const defaultProductOption: ProductOption = {
  nombre: "",
  descripcion: "",
  precio: 0,
};

const ProductOptionsList: React.FC<ProductOptionsListProps> = ({
  value: initialOptionsList = [],
  updateList: updateProductOptions,
}) => {
  const [optionsList, setOptionsList] = useState<ProductOption[]>([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [isAdding, setIsAdding] = useState(false);
  const [newItem, setNewItem] = useState<ProductOption>(defaultProductOption);
  const [editingValue, setEditingValue] =
    useState<ProductOption>(defaultProductOption);
  const [modalState, setModalState] = useState({ open: false, index: -1 });
  const isPriceValid = (price: number) => !isNaN(price) && price > 0;
  const isButtonDisabled = isAdding || editingIndex !== -1;
  const [expandedRows, setExpandedRows] = useState<number[]>([]);
  // la siguiente linea supuestamente hace un efecto de animacion al abrir y cerrar la descripcion de la opcion. pero no anda.
  const [rowHeights, setRowHeights] = useState<{ [key: number]: number }>({});

  const memoizedInitialOptionsList = useMemo(
    () => initialOptionsList,
    [initialOptionsList]
  );

  const sortListByPrice = useCallback((list: ProductOption[]) => {
    return [...list].sort((a, b) => a.precio - b.precio);
  }, []);

  useEffect(() => {
    const sortedList = sortListByPrice(memoizedInitialOptionsList);
    if (JSON.stringify(optionsList) !== JSON.stringify(sortedList)) {
      setOptionsList(sortedList);
    }
  }, [memoizedInitialOptionsList, sortListByPrice]);

  const handleDelete = (index: number) => {
    const newValue = optionsList.filter((_, i) => i !== index);
    updateProductOptions(newValue);
  };

  const handleAdd = (item: ProductOption) => {
    const newValue = [...optionsList, item];
    setIsAdding(false);
    setNewItem(defaultProductOption);
    updateProductOptions(sortListByPrice(newValue));
  };

  const handleCancelAdd = () => {
    setIsAdding(false);
    setNewItem(defaultProductOption);
  };

  const handleConfirmEdit = (index: number, item: ProductOption) => {
    const newValue = optionsList.map((v, i) => (i === index ? item : v));
    setEditingIndex(-1);
    setEditingValue(defaultProductOption);
    setExpandedRows(expandedRows.filter((i) => i !== index));
    updateProductOptions(sortListByPrice(newValue));
  };

  const handleCancelEdit = () => {
    setEditingIndex(-1);
    setEditingValue(defaultProductOption);
    setExpandedRows(expandedRows.filter((i) => i !== editingIndex));
  };

  const handleStartEdit = (index: number, item: ProductOption) => {
    setEditingIndex(index);
    setEditingValue(item);
  };

  const handleOpenModalDeleteFeature = (index: number) => {
    setModalState({ open: true, index });
  };

  const handleCloseModal = () => {
    setModalState({ open: false, index: -1 });
  };

  const handleConfirmDelete = () => {
    if (modalState.index !== null) {
      handleDelete(modalState.index);
    }
    handleCloseModal();
  };

  const toggleRow = (index: number) => {
    setExpandedRows((prevExpandedRows) =>
      prevExpandedRows.includes(index)
        ? prevExpandedRows.filter((rowIndex) => rowIndex !== index)
        : [...prevExpandedRows, index]
    );

    if (!expandedRows.includes(index)) {
      const row = document.getElementById(`row-${index}`);
      if (row) {
        setRowHeights((prevHeights) => ({
          ...prevHeights,
          [index]: row.scrollHeight,
        }));
      }
    }
  };

  return (
    <section className="flex w-full justify-center">
      <div className="lg:-mx-8 -my-2 w-full overflow-x-auto py-2 sm:-mx-6">
        <label
          htmlFor="options"
          className="text-md block font-medium leading-6 text-gray-900"
        >
          Opciones
        </label>
        <div className="mt-2 inline-block min-w-full overflow-hidden border border-gray-200 align-middle shadow sm:rounded-lg">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="min-w-max border-b border-gray-200 bg-gray-50 px-4 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                  Nombre
                </th>
                <th className="min-w-max border-b border-gray-200 bg-gray-50 px-4 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                  Precio
                </th>
                <th className="min-w-max border-b border-gray-200 bg-gray-50 px-4 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                  Descripción
                </th>
                <th className="w-1 border-b border-gray-200 bg-gray-50 px-6 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                  <button
                    className={`flex h-full w-16 items-center justify-center rounded border px-2 py-2 text-xs text-white hover:scale-105 ${
                      isButtonDisabled ? "cursor-not-allowed opacity-50" : ""
                    }`}
                    onClick={() => setIsAdding(true)}
                    disabled={isButtonDisabled}
                  >
                    <AddIcon />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {/* VER - EDITAR */}
              {optionsList &&
                optionsList.map((productOption, index) => (
                  <React.Fragment key={index}>
                    <tr>
                      <td
                        className="whitespace-no-wrap border-b border-gray-200 px-4 py-4"
                        colSpan={editingIndex === index ? 3 : 1}
                      >
                        <div className="w-full text-sm font-medium leading-5 text-gray-900">
                          {editingIndex === index ? (
                            <div className="space-y-2">
                              <div className="flex space-x-2">
                                <input
                                  type="text"
                                  value={editingValue.nombre}
                                  onChange={(e) =>
                                    setEditingValue({
                                      ...editingValue,
                                      nombre: e.target.value,
                                    })
                                  }
                                  placeholder="Nombre"
                                  className="w-3/4 rounded-md border border-gray-300 px-3 py-1 transition duration-150 ease-in-out focus:border-red-500 focus:outline-none focus:ring focus:ring-blue-500"
                                />
                                <div className="relative w-1/4">
                                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <span className="text-gray-900 sm:text-sm">
                                      $
                                    </span>
                                  </div>
                                  <input
                                    type="number"
                                    value={
                                      editingValue.precio !== null &&
                                      editingValue.precio !== undefined
                                        ? editingValue.precio
                                        : ""
                                    }
                                    onChange={(e) =>
                                      setEditingValue({
                                        ...editingValue,
                                        precio:
                                          e.target.value === ""
                                            ? 0
                                            : parseFloat(e.target.value),
                                      })
                                    }
                                    placeholder="Precio"
                                    className="w-full rounded-md border border-gray-300 px-3 py-1 pl-7 transition duration-150 ease-in-out focus:border-red-500 focus:outline-none focus:ring focus:ring-blue-500"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                  />
                                </div>
                              </div>
                              <textarea
                                value={editingValue.descripcion}
                                onChange={(e) =>
                                  setEditingValue({
                                    ...editingValue,
                                    descripcion: e.target.value,
                                  })
                                }
                                placeholder="Descripción"
                                rows={3}
                                className="w-full rounded-md border border-gray-300 px-3 py-1 transition duration-150 ease-in-out focus:border-red-500 focus:outline-none focus:ring focus:ring-blue-500"
                              />
                            </div>
                          ) : (
                            <span>{productOption.nombre}</span>
                          )}
                        </div>
                      </td>
                      {editingIndex !== index && (
                        <>
                          <td className="whitespace-no-wrap border-b border-gray-200 px-4 py-4">
                            <div className="w-full text-sm font-medium leading-5 text-gray-900">
                              $ {productOption.precio.toLocaleString("es-ES")}
                            </div>
                          </td>
                          <td className="whitespace-no-wrap border-b border-gray-200 px-4 py-4">
                            <div className="w-full text-sm font-medium leading-5 text-gray-900">
                              <button
                                onClick={() => toggleRow(index)}
                                className="flex items-center text-indigo-600 hover:scale-110"
                              >
                                {expandedRows.includes(index) ? (
                                  <>
                                    <ChevronUpIcon className="h-5 w-5" />
                                    <span className="ml-2">Ocultar</span>
                                  </>
                                ) : (
                                  <>
                                    <ChevronDownIcon className="h-6 w-6" />
                                    <span className="ml-1">Mostrar</span>
                                  </>
                                )}
                              </button>
                            </div>
                          </td>
                        </>
                      )}
                      <td className="whitespace-no-wrap w-1 border-b border-gray-200 px-6 py-4 text-right text-sm font-medium leading-5">
                        {editingIndex === index ? (
                          <div className="flex justify-between">
                            <button
                              className="flex items-center text-indigo-600 hover:scale-110"
                              onClick={() =>
                                handleConfirmEdit(index, editingValue)
                              }
                            >
                              <ConfirmEditIcon />
                            </button>
                            <button
                              className="flex items-center text-indigo-600 hover:scale-110"
                              onClick={() => handleCancelEdit()}
                            >
                              <CancelEditIcon />
                            </button>
                          </div>
                        ) : (
                          <div className="flex justify-between">
                            <button
                              className={`flex items-center text-indigo-600 hover:scale-110 ${
                                isButtonDisabled
                                  ? "cursor-not-allowed opacity-50"
                                  : ""
                              }`}
                              onClick={() =>
                                handleStartEdit(index, productOption)
                              }
                              disabled={isButtonDisabled}
                            >
                              <EditIcon />
                            </button>
                            <button
                              className={`flex items-center text-indigo-600 hover:scale-110 ${
                                isButtonDisabled
                                  ? "cursor-not-allowed opacity-50"
                                  : ""
                              }`}
                              onClick={() =>
                                handleOpenModalDeleteFeature(index)
                              }
                              disabled={isButtonDisabled}
                            >
                              <RemoveIcon />
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                    {expandedRows.includes(index) && editingIndex !== index && (
                      <tr>
                        <td colSpan={4} className="bg-gray-50 px-6 py-4">
                          <div
                            id={`row-${index}`}
                            style={{
                              maxHeight: expandedRows.includes(index)
                                ? `${rowHeights[index]}px`
                                : "0",
                              overflow: "hidden",
                              transition: "max-height 0.3s ease-out",
                            }}
                          >
                            <div className="w-full text-sm font-medium leading-5 text-gray-900">
                              <p>
                                <strong>Descripción:</strong>{" "}
                                {productOption.descripcion}
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}

              {/* AGREGAR */}
              {isAdding && (
                <>
                  <tr>
                    <td colSpan={4}>
                      <div className="border-b border-gray-200 bg-gray-50 px-4 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                        <p>NUEVA OPCIÓN</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan={3}
                      className="whitespace-no-wrap border-b border-gray-200 px-4 py-3"
                    >
                      <div className="space-y-2">
                        <div className="flex space-x-2">
                          <input
                            type="text"
                            value={newItem.nombre}
                            onChange={(e) =>
                              setNewItem({ ...newItem, nombre: e.target.value })
                            }
                            placeholder="Nombre"
                            className="w-3/4 rounded-md border border-gray-300 px-3 py-1 transition duration-150 ease-in-out focus:border-red-500 focus:outline-none focus:ring focus:ring-blue-500"
                          />
                          <div className="relative w-1/4">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                              <span className="text-gray-900 sm:text-sm">
                                $
                              </span>
                            </div>
                            <input
                              type="number"
                              value={
                                newItem.precio !== null &&
                                newItem.precio !== undefined &&
                                newItem.precio !== 0
                                  ? newItem.precio
                                  : ""
                              }
                              onChange={(e) =>
                                setNewItem({
                                  ...newItem,
                                  precio:
                                    e.target.value === ""
                                      ? 0
                                      : parseFloat(e.target.value),
                                })
                              }
                              placeholder="Precio"
                              className="w-full rounded-md border border-gray-300 px-3 py-1 pl-7 transition duration-150 ease-in-out focus:border-red-500 focus:outline-none focus:ring focus:ring-blue-500"
                              inputMode="numeric"
                              pattern="[0-9]*"
                            />
                          </div>
                        </div>
                        <textarea
                          value={newItem.descripcion}
                          onChange={(e) =>
                            setNewItem({
                              ...newItem,
                              descripcion: e.target.value,
                            })
                          }
                          placeholder="Descripción"
                          rows={3}
                          className="w-full rounded-md border border-gray-300 px-3 py-1 transition duration-150 ease-in-out focus:border-red-500 focus:outline-none focus:ring focus:ring-blue-500"
                        />
                      </div>
                    </td>

                    <td className="whitespace-no-wrap w-1 border-b border-gray-200 px-6 py-4 text-right text-sm font-medium leading-5">
                      <div className="flex justify-between">
                        <button
                          className={`flex items-center text-indigo-600 hover:scale-110 ${
                            newItem.nombre.trim() === "" ||
                            newItem.descripcion.trim() === "" ||
                            !isPriceValid(newItem.precio)
                              ? "cursor-not-allowed opacity-50"
                              : ""
                          }`}
                          onClick={() => handleAdd(newItem)}
                          disabled={
                            newItem.nombre.trim() === "" ||
                            newItem.descripcion.trim() === "" ||
                            !isPriceValid(newItem.precio)
                          }
                        >
                          <ConfirmAddIcon />
                        </button>
                        <button
                          className="flex items-center text-indigo-600 hover:scale-110"
                          onClick={() => handleCancelAdd()}
                        >
                          <CancelAddIcon />
                        </button>
                      </div>
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>

          <CustomModal
            open={modalState.open}
            setOpen={handleCloseModal}
            title="Eliminar opción del producto"
            message={`¿Estás seguro de que querés eliminar la opción? Esta acción no podrá revertirse.`}
            confirmText="Sí, eliminar"
            cancelText="No, cancelar"
            onConfirm={handleConfirmDelete}
            onCancel={handleCloseModal}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductOptionsList;
