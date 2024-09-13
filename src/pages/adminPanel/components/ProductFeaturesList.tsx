import React, { useEffect, useRef, useState } from "react";
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

interface ProductFeaturesListProps {
  value: string[];
  onChange: (value: string[]) => void;
}

const ProductFeaturesList: React.FC<ProductFeaturesListProps> = ({
  value,
  onChange,
}) => {
  const [editingIndex, setEditingIndex] = useState(-1);
  const [isAdding, setIsAdding] = useState(false);
  const [newItem, setNewItem] = useState("");
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const [spanWidth, setSpanWidth] = useState(0);
  const [editingValue, setEditingValue] = useState("");
  const [modalState, setModalState] = useState({ open: false, index: -1 });

  const handleDelete = (index: number) => {
    const newValue = value.filter((_, i) => i !== index);
    onChange(newValue);
  };

  const handleAdd = (item: string) => {
    const newValue = [...value, item];
    setIsAdding(false);
    setNewItem("");
    onChange(newValue);
  };

  const handleCancelAdd = () => {
    setIsAdding(false);
    setNewItem("");
  };

  const handleConfirmEdit = (index: number, item: string) => {
    const newValue = value.map((v, i) => (i === index ? item : v));
    onChange(newValue);
    setEditingIndex(-1);
    setEditingValue("");
  };

  const handleStartEdit = (index: number, item: string) => {
    setEditingIndex(index);
    setEditingValue(item);
  };

  const handleCancelEdit = () => {
    setEditingIndex(-1);
    setEditingValue("");
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

  const isButtonDisabled = isAdding || editingIndex !== -1;

  useEffect(() => {
    if (spanRef.current) {
      setSpanWidth(spanRef.current.offsetWidth);
    }
  }, [editingIndex]);

  return (
    <section className="flex w-full justify-center">
      <div className="lg:-mx-8 -my-2 w-full overflow-x-auto py-2 sm:-mx-6">
        <label
          htmlFor="features"
          className="text-md block font-medium leading-6 text-gray-900"
        >
          Características
        </label>
        <div className="mt-2 inline-block min-w-full overflow-hidden border border-gray-200 align-middle shadow sm:rounded-lg">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="border-b border-gray-200 bg-gray-50 px-6 text-left text-sm">
                  {value && value.length > 0
                    ? `Total: ${value.length}`
                    : "Todavía no hay características para este producto"}
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
              {value &&
                value.map((item, index) => (
                  <tr key={index}>
                    <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
                      <div className="w-full text-sm font-medium leading-5 text-gray-900">
                        {editingIndex === index ? (
                          <input
                            type="text"
                            value={editingValue}
                            onChange={(e) => setEditingValue(e.target.value)}
                            style={{ width: `${spanWidth}px` }}
                            className="w-full rounded-md border border-gray-300 px-3 py-1 transition duration-150 ease-in-out focus:border-red-500 focus:outline-none focus:ring focus:ring-blue-500"
                          />
                        ) : (
                          <span ref={spanRef} className="block">
                            {item}
                          </span>
                        )}
                      </div>
                    </td>
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
                            onClick={() => handleStartEdit(index, item)}
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
                            onClick={() => handleOpenModalDeleteFeature(index)}
                            disabled={isButtonDisabled}
                          >
                            <RemoveIcon />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              {isAdding && (
                <tr>
                  <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
                    <input
                      type="text"
                      value={newItem}
                      onChange={(e) => setNewItem(e.target.value)}
                      className="w-full rounded-md border border-gray-300 px-3 py-1 transition duration-150 ease-in-out focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500"
                    />
                  </td>
                  <td className="whitespace-no-wrap w-1 border-b border-gray-200 px-6 py-4 text-right text-sm font-medium leading-5">
                    <div className="flex justify-between">
                      <button
                        className={`flex items-center text-indigo-600 hover:scale-110 ${
                          newItem.trim() === ""
                            ? "cursor-not-allowed opacity-50"
                            : ""
                        }`}
                        onClick={() => handleAdd(newItem)}
                        disabled={newItem.trim() === ""}
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
              )}
            </tbody>
          </table>

          <CustomModal
            open={modalState.open}
            setOpen={handleCloseModal}
            title="Eliminar característica del producto"
            message={`¿Estás seguro de que querés eliminar la característica? Esta acción no podrá revertirse.`}
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

export default ProductFeaturesList;
