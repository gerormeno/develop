import { Product, ProductOption } from "@/types/product.type";

const validateName = (name: string | undefined): string | null => {
  if (!name || name.trim() === "") {
    return "El nombre del producto es requerido.";
  }
  return null;
};

const validateCategory = (category: string | undefined): string | null => {
  if (!category) {
    return "La categoría del producto es requerida.";
  }
  return null;
};

const validatePrice = (price: number | undefined): string | null => {
  if (!price || price <= 0) {
    return "El precio del producto es requerido.";
  }
  return null;
};

const validateDescription = (description: string | undefined): string | null => {
  if (!description || description.trim() === "") {
    return "La descripción del producto es requerida.";
  }
  return null;
};

const validateFeatures = (features: string[] | undefined): string | null => {
  if (!features || features.length === 0) {
    return "El producto debe tener al menos una característica.";
  }
  return null;
};

const validateOptions = (options: ProductOption[] | undefined, productPrice: number): string | null => {
  if (!options || options.length === 0) {
    return null;
  }

  const hasMatchingPrice = options.some(
    (option) => option.precio === productPrice
  );
  if (!hasMatchingPrice) {
    return "Debe haber al menos una opción con el mismo precio del producto.";
  }

  return null;
};

const validateImages = (productImages: string[] | undefined, newImages: File[]): string | null => {
  if ((!productImages || productImages.length === 0) && newImages.length === 0) {
    return "El producto debe tener al menos una foto.";
  }
  return null;
};

const validateYoutubeLink = (link: string | undefined): string | null => {
  if (!link || link.trim() === "") {
    return null;
  }

  const youtubeRegex =
    /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;

  if (!youtubeRegex.test(link)) {
    return "El link del tutorial de YouTube no es válido.";
  }

  return null;
};

export const validateProduct = (product: Product, onValidationResult: (isValid: boolean, message: string) => void, imagesToUpload?:File[]) => {
  const successMessage = product.id
    ? "El producto ha sido modificado con éxito!"
    : "El producto ha sido creado con éxito!";
  
  const validators = [
    validateName(product.nombre),
    validateCategory(product.categoria),
    validatePrice(product.precio),
    validateDescription(product.descripcion),
    validateFeatures(product.caracteristicas),
    validateOptions(product.opciones, product.precio),
    validateImages(product.fotos, imagesToUpload || []),
    validateYoutubeLink(product.linkTutorial),
  ];

  for (const validationError of validators) {
    if (validationError) {
      onValidationResult(false, validationError);
      return;
    }
  }

  onValidationResult(true, successMessage);
};