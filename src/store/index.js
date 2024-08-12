import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import filtersReducer from "./filters";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filters: filtersReducer,
  },
});
