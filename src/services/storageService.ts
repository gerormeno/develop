import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { storage } from "@/firebase-config";

export const uploadImages = async (files: File[], productName: string): Promise<string[]> => {
  const uploadPromises = files.map(async (file) => {
    const storageRef = ref(storage, `uploadedProducts/${convertToCamelCase(productName)}_${file.name}`);
    try {
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      return url;
    } catch (error) {
      console.error("Error al subir la imagen:", error);
      return null;
    }
  });

  const urls = await Promise.all(uploadPromises);
  return urls.filter((url): url is string => url !== null);
};

export const deleteImages = async (imageUrls: string[]): Promise<void> => {
  const deletePromises = imageUrls.map(async (imageUrl) => {
    try {
      const storageRef = ref(storage, imageUrl);
      await deleteObject(storageRef);
      console.log(`Image ${imageUrl} deleted successfully!`);
    } catch (error) {
      console.error(`Error deleting image ${imageUrl}:`, error);
      throw error;
    }
  });

  await Promise.all(deletePromises);
};

const convertToCamelCase = (text: string): string => {
  const words = text.split(" ");
  const camelCaseWords = words.map((word, index) => {
    if (index === 0) {
      return word.toUpperCase();
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  });
  return camelCaseWords.join("");
};