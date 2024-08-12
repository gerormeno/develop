type ProductOption = {
  nombre: string;
  descripcion: string;
  precio: number;
};

type Product = {
  nombre: string;
  precio: number;
  categoria: string;
  descripcion: string;
  descripcionLarga: string;
  caracteristicas: string[];
  fotos: string[];
  opciones: ProductOption[];
  activo: boolean;
};
