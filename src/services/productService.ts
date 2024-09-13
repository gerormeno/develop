import { db } from "@/firebase-config";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  getDoc,
} from "firebase/firestore";
import { Product } from "@/types/product.type";
import { uploadImages, deleteImages } from "./storageService";

const productCollection = collection(db, "products");

export const getProducts = async (): Promise<Product[]> => {
  try {
    const productsSnapshot = await getDocs(productCollection);
    const productsList = productsSnapshot.docs.map((doc) => {
      const data = doc.data() as Product;
      return { ...data, id: doc.id };
    });
    productsList.sort((a, b) => {
      if (a.categoria < b.categoria) return -1;
      if (a.categoria > b.categoria) return 1;
      if (a.precio < b.precio) return -1;
      if (a.precio > b.precio) return 1;
      return 0;
    });
    return productsList;
  } catch (e) {
    console.error("Error al obtener los productos: ", e);
    throw e;
  }
};

export const getProductByName = async (
  name: string
): Promise<Product | null> => {
  try {
    const productsSnapshot = await getDocs(productCollection);
    const product = productsSnapshot.docs
      .map((doc) => ({ ...doc.data(), id: doc.id } as Product))
      .find((product) => product.nombre === name);

    if (!product) {
      throw new Error(`Producto con nombre "${name}" no encontrado`);
    }

    return product;
  } catch (e) {
    console.error(`Error al obtener el producto con nombre "${name}": `, e);
    throw e;
  }
};

export const addProduct = async (product: Product, images: File[]) => {
  try {
    const imageUrls = await uploadImages(images, product.nombre);
    const productWithImages = { ...product, fotos: imageUrls };
    const docRef = await addDoc(productCollection, productWithImages);
    console.log(`Producto "${product.nombre}" agregado con ID: ${docRef.id}`);
    return { ...productWithImages, id: docRef.id };
  } catch (e) {
    console.error(`Error al agregar el producto "${product.nombre}": `, e);
    throw e;
  }
};

export const updateProduct = async (product: Product, newImages: File[]) => {
  try {
    if (!product.id) {
      throw new Error("El producto debe tener un ID para ser actualizado");
    }

    const productDoc = doc(db, "products", product.id);
    const productSnapshot = await getDoc(productDoc);
    if (!productSnapshot.exists()) {
      throw new Error("El producto no existe en la base de datos");
    }

    const currentProductData = productSnapshot.data();
    const currentImages = currentProductData.fotos || [];

    const imagesToKeep = currentImages.filter((url: string) =>
      product.fotos.includes(url)
    );

    const imagesToDelete = currentImages.filter(
      (url: string) => !product.fotos.includes(url)
    );

    await deleteImages(imagesToDelete);

    const newImageUrls = await uploadImages(newImages, product.nombre);

    const updatedImages = [...imagesToKeep, ...newImageUrls];

    const updatedProduct = { ...product, fotos: updatedImages };
    await updateDoc(productDoc, updatedProduct);

    console.log(
      `Producto "${product.nombre}" actualizado con ID: ${product.id}`
    );
  } catch (e) {
    console.error(`Error al actualizar el producto "${product.nombre}": `, e);
    throw e;
  }
};

export const deleteProduct = async (product: Product) => {
  try {
    if (!product.id) {
      throw new Error("El producto debe tener un ID para ser eliminado");
    }
    const productDoc = doc(db, "products", product.id);
    await deleteDoc(productDoc);
    console.log(`Producto "${product.nombre}" eliminado con ID: ${product.id}`);

    if (product.fotos && product.fotos.length > 0) {
      await deleteImages(product.fotos);
    }
  } catch (e) {
    console.error(`Error al eliminar el producto "${product.nombre}": `, e);
    throw e;
  }
};