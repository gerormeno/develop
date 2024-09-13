export type ProductOption = {
  nombre: string;
  descripcion: string;
  precio: number;
};

export type Product = {
  id?: string; 
  nombre: string;
  precio: number;
  categoria: string;
  descripcion: string;
  caracteristicas: string[];
  fotos: string[];
  opciones: ProductOption[];
  activo: boolean;
  linkTutorial: string;
};
