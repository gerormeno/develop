import { Product } from "@/types/product.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Cart {
  items: CartProduct[];
  statusTab: boolean;
}

interface CartProduct {
  product: Product;
  quantity: number;
  option?: string;
  price: number;
}

const initialState = {
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")!)
    : [],
  statusTab: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state: Cart, action: PayloadAction<{product: Product, option?: string, price:number}>) { // Modifica el PayloadAction aquí
      const productInCart = state.items.find(
        (item) => item.product.nombre === action.payload.product.nombre && item.option === action.payload.option // Considera el tamaño aquí
      );

      if (!productInCart) {
        state.items.push({ product: action.payload.product, quantity: 1, option: action.payload.option, price: action.payload.price }); // Agrega el tamaño aquí
      } else {
        productInCart.quantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeFromCart(state: Cart, action: PayloadAction<{product: Product, option?: string}>) { // Modifica el PayloadAction aquí
      const index = state.items.findIndex(
        (item) => item.product.nombre === action.payload.product.nombre && item.option === action.payload.option // Considera el tamaño aquí
      );

      if (index !== -1) {
        if (state.items[index].quantity > 1) {
          state.items[index].quantity -= 1;
        } else {
          state.items.splice(index, 1);
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeAllFromCart(state: Cart, action: PayloadAction<{product: Product, option?: string}>) { // Modifica el PayloadAction aquí
      const index = state.items.findIndex(
        (item) => item.product.nombre === action.payload.product.nombre && item.option === action.payload.option // Considera el tamaño aquí
      );

      if (index !== -1) {
        state.items.splice(index, 1);
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    resetCart(state) {
      state.items = [];
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    toggleStatusTab(state) {
      state.statusTab = !state.statusTab;
    },
  },
});

export const { addToCart, removeFromCart, toggleStatusTab, removeAllFromCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;