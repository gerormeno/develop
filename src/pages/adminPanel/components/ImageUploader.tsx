import React, { useState, useEffect } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import RemoveImageIcon from "@/assets/icons/RemoveImageIcon";
import CustomModal from "@/components/CustomModal";
import ImageSkeleton from "./ImageSkeleton";

interface ImageUploaderProps {
  fotos: string[];
  addImage: (e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>) => void;
  deleteImage: (imageUrl: string) => void;
  isEditing?: boolean;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  fotos,
  addImage,
  deleteImage,
  isEditing = false,
}) => {
  const [openModalDeleteImage, setOpenModalDeleteImageState] = useState(false);
  const [imageToDelete, setImageToDeleteState] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (fotos.length > 0 || !isEditing) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [fotos, isEditing]);

  const handleDeleteImage = () => {
    if (imageToDelete) {
      deleteImage(imageToDelete);
    }
    setOpenModalDeleteImageState(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragEnter = () => {
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    if (e.currentTarget.contains(e.relatedTarget as Node)) {
      return;
    }
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    addImage(e);
  };

  return (
    <div>
      <label
        htmlFor="product-images"
        className="text-md mb-2 block font-medium leading-6 text-gray-900"
      >
        Imágenes
      </label>
      <div className="flex flex-col items-center">
        {loading ? (
          <ImageSkeleton />
        ) : (
          fotos &&
          fotos.length > 0 && (
            <div className="mt-0 flex w-full flex-col items-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="flex flex-wrap justify-center gap-4">
                {fotos.map((image, index) => (
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
                      onClick={() => {
                        setImageToDeleteState(image);
                        setOpenModalDeleteImageState(true);
                      }}
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 hover:opacity-100"
                      aria-label={`Eliminar imagen ${index + 1}`}
                    >
                      <RemoveImageIcon />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )
        )}

        <div
          className={`flex w-full flex-col items-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 ${
            isDragging ? "bg-gray-100" : ""
          }`}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center">
            <PhotoIcon aria-hidden="true" className="h-12 w-12 text-gray-300" />
            <div className="mt-4 flex flex-col items-center text-sm leading-6 text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span className="block">Subí tus archivos</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  onChange={(e) => addImage(e)}
                  multiple
                />
              </label>
              <p className="mt-1">o arrastrá y soltá</p>
            </div>
            <p className="mt-2 text-xs leading-5 text-gray-600">
              PNG, JPG, GIF hasta 10MB
            </p>
          </div>
        </div>
      </div>

      <CustomModal
        open={openModalDeleteImage}
        setOpen={setOpenModalDeleteImageState}
        title="Eliminar imagen del producto"
        message="¿Estás seguro de que querés eliminar la imagen? Esta acción no podrá revertirse."
        confirmText="Sí, eliminar"
        cancelText="No, cancelar"
        onConfirm={handleDeleteImage}
        onCancel={() => setOpenModalDeleteImageState(false)}
      />
    </div>
  );
};

export default ImageUploader;