import { useDispatch, useSelector } from "react-redux";
import { toggleStatusTab } from "@/store/cart";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { removeFromCart } from "@/store/cart";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { theme } from "@/theme";
import NotAvailableImg from "@/assets/adminPanel/picture-not-available.jpg";
import { Product } from "@/types/product.type";

interface CartProduct {
  product: Product;
  quantity: number;
  option?: string;
  price: number;
}

interface Cart {
  items: CartProduct[];
  statusTab: boolean;
}

interface Store {
  cart: Cart;
}

const CartTab = () => {
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const statusTab = useSelector((store: Store) => store.cart.statusTab);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart: CartProduct[] = useSelector((store: Store) => store.cart.items);

  const handleRemoveFromCart = (product: Product, option?: string) => {
    option
      ? dispatch(removeFromCart({ product, option }))
      : dispatch(removeFromCart({ product }));
  };

  const handleCloseTabCart = () => {
    location.pathname !== "/products" && navigate("/products");
    dispatch(toggleStatusTab());
  };

  const location = useLocation();

  function calculateTotalPrice(products: CartProduct[]): number {
    let total = 0;
    products.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total;
  }

  useEffect(() => {
    setTotalAmount(calculateTotalPrice(cart));
  }, [cart]);

  return (
    <Transition show={statusTab}>
      <Dialog
        className="relative z-10"
        onClose={() => dispatch(toggleStatusTab())}
      >
        <TransitionChild
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <TransitionChild
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="pointer-events-auto w-screen max-w-sm">
                  <div
                    className={`flex h-full flex-col overflow-y-scroll border-gray-200 backdrop-filter ${
                      theme.blurCartTabEffect
                        ? "bg-white bg-opacity-10 backdrop-blur backdrop-filter"
                        : "bg-cart-background"
                    }`}
                  >
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <DialogTitle className="text-lg font-medium text-cart-text-primary">
                          Tu carrito de compras
                        </DialogTitle>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-cart-text-primary hover:text-cart-text-primary-hover"
                            onClick={handleCloseTabCart}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <hr className="my-4 border-gray-200" />

                      <div className="mt-6">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-400 divide-opacity-25 border-t border-white border-opacity-25"
                          >
                            {cart.map((product, index) => (
                              <li
                                key={index}
                                className="flex border-t border-white border-opacity-25 py-6"
                              >
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-300">
                                  <img
                                    src={
                                      product.product.fotos &&
                                      product.product.fotos.length > 0
                                        ? product.product.fotos[0]
                                        : NotAvailableImg
                                    }
                                    alt={product.product.nombre}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col py-1">
                                  <div>
                                    <div className="flex justify-between">
                                      <h3>
                                        <a
                                          href={`products/${index}`}
                                          className="text-xl font-medium text-cart-text-primary"
                                        >
                                          {product.product.nombre}
                                        </a>
                                      </h3>
                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium text-cart-text-primary hover:text-cart-text-primary-hover"
                                          onClick={() =>
                                            handleRemoveFromCart(
                                              product.product,
                                              product.option
                                            )
                                          }
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                    {product.option && (
                                      <p className="text-sm text-cart-text-secondary">
                                        {product.option}
                                      </p>
                                    )}
                                    <p className="text-cart-text-secondary">
                                      $
                                      {(
                                        product.price * product.quantity
                                      ).toLocaleString("de-DE")}
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-cart-text-secondary">
                                      x{product.quantity}
                                    </p>
                                  </div>
                                </div>
                              </li>
                            ))}
                            {cart.length === 0 && (
                              <div
                                className="my-8 flex flex-col items-center justify-center rounded-md
                              border-opacity-25 px-4 py-6 text-center text-cart-text-primary sm:px-6"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  shape-rendering="geometricPrecision"
                                  text-rendering="geometricPrecision"
                                  image-rendering="optimizeQuality"
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  viewBox="0 0 403 512.4"
                                  className="mx-auto mb-6 h-24 w-24 text-cart-text-primary"
                                >
                                  <path
                                    fill="white"
                                    d="M18.67 114.75h85.03v-17.3c0-26.81 10.97-51.18 28.62-68.83S174.33 0 201.15 0c26.81 0 51.19 10.97 68.84 28.62 17.65 17.65 28.61 42.02 28.61 68.83v17.3h85.73c5.15 0 9.81 2.13 13.17 5.49l.91 1.02c2.86 3.3 4.59 7.59 4.59 12.16v311.99c0 18.39-7.55 35.15-19.7 47.29-12.14 12.14-28.9 19.7-47.29 19.7H66.98c-18.35 0-35.12-7.56-47.28-19.72C7.55 480.58 0 463.83 0 445.41V133.42c0-5.14 2.11-9.83 5.48-13.19 3.36-3.37 8.05-5.48 13.19-5.48zm129.71 181.38c-5.02-5.01-5.02-13.16 0-18.17 5.01-5.02 13.16-5.02 18.17 0l34.95 34.94 34.95-34.94c5.01-5.02 13.16-5.02 18.17 0 5.02 5.01 5.02 13.16 0 18.17l-34.94 34.95 34.94 34.94c5.02 5.02 5.02 13.16 0 18.18-5.01 5.01-13.16 5.01-18.17 0l-34.95-34.95-34.95 34.95c-5.01 5.02-13.16 5.02-18.18 0-5.01-5.01-5.01-13.16 0-18.17l34.95-34.95-34.94-34.95zm-20.92-181.38h147.38v-17.3c0-20.25-8.29-38.68-21.65-52.03-13.36-13.36-31.79-21.66-52.04-21.66s-38.68 8.3-52.03 21.66c-13.36 13.35-21.66 31.78-21.66 52.03v17.3zm-23.76 46.09v-22.31H23.78v306.88c0 11.86 4.88 22.65 12.71 30.48 7.81 7.87 18.62 12.72 30.49 12.72h269.03c11.83 0 22.64-4.89 30.48-12.72 7.84-7.84 12.73-18.65 12.73-30.48V138.53H298.6v22.56c8.82 4.48 14.86 13.64 14.86 24.21 0 14.99-12.15 27.15-27.15 27.15-14.99 0-27.15-12.16-27.15-27.15 0-10.9 6.42-20.29 15.68-24.62v-22.15H127.46v22.4c8.99 4.42 15.18 13.67 15.18 24.37 0 14.99-12.15 27.15-27.15 27.15-14.99 0-27.14-12.16-27.14-27.15 0-10.77 6.26-20.07 15.35-24.46z"
                                  />
                                </svg>
                                <span className="my-2 block text-sm font-semibold text-cart-text-primary">
                                  Parece que tu carrito está vacío.
                                  <br />
                                  ¡Navegá por nuestro catálogo <br /> y llevá tu
                                  cultivo al siguiente nivel!
                                </span>
                                <button>
                                  <HashLink
                                    smooth
                                    to="/products#top"
                                    className="mt-8 inline-flex items-center rounded-md border border-transparent bg-accent px-4 py-2 
                                  text-sm font-medium text-text-button hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                  >
                                    Empezar
                                  </HashLink>
                                </button>
                              </div>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-cart-text-primary">
                        <p>Total</p>
                        <p>$ {totalAmount.toLocaleString("de-DE")}</p>
                      </div>
                      <div className="mt-6">
                        <HashLink
                          smooth
                          to={`/checkout#top`}
                          onClick={() => handleCloseTabCart()}
                          className="flex items-center justify-center rounded-md border border-transparent bg-accent 
                          px-6 py-3 text-base font-medium text-text-button shadow-sm hover:bg-accent-hover"
                        >
                          Confirmar
                        </HashLink>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-cart-text-primary">
                        <p>
                          {location.pathname !== "/products" ? (
                            <HashLink smooth to={"/products#top"}>
                              <button
                                type="button"
                                className="font-medium text-cart-text-primary hover:text-cart-text-primary-hover"
                                onClick={() => handleCloseTabCart()}
                              >
                                Empezar
                                <span aria-hidden="true"> &rarr;</span>
                              </button>
                            </HashLink>
                          ) : (
                            <button
                              type="button"
                              className="font-medium text-cart-text-primary hover:text-cart-text-primary-hover"
                              onClick={() => handleCloseTabCart()}
                            >
                              Seguir comprando
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CartTab;
