import { Product } from "@/data/products";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { TrashIcon } from "@heroicons/react/20/solid";
import {
  addToCart,
  removeAllFromCart,
  removeFromCart,
  resetCart,
} from "@/store/cart";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { HashLink } from "react-router-hash-link";
import CustomField from "./components/CustomField";

interface CartProduct {
  product: Product;
  quantity: number;
}

interface Cart {
  items: CartProduct[];
  statusTab: boolean;
}

interface Store {
  cart: Cart;
}

export default function Example() {
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const products: CartProduct[] = useSelector(
    (store: Store) => store.cart.items
  );

  const subtotal = products.reduce(
    (total, product) => total + product.product.price * product.quantity,
    0
  );

  useEffect(() => {
    calculeTotalAmount();
  }, []);

  const calculeTotalAmount = () => {
    let total = 0;
    products.forEach((product) => {
      total += product.product.price * product.quantity;
    });
    setTotalAmount(total);
  };

  const form = useRef<HTMLFormElement>(null);

  const dispatch = useDispatch();

  const handleRemoveFromCart = (product: Product) => {
    dispatch(removeFromCart(product));
  };

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveAllFromCart = (product: Product) => {
    dispatch(removeAllFromCart(product));
  };

  const handleResetCart = () => {
    dispatch(resetCart());
  };

  const sendEmail = () => {
    setIsLoading(true);
    if (form.current) {
      // Crear una cadena de texto con todos los productos y sus cantidades
      let cartItems = "";
      products.forEach((product) => {
        cartItems += `- ${product.product.name}: ${product.quantity}`;
      });

      // Crear un campo oculto en el formulario para los productos del carrito
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = "cartItems";
      input.value = cartItems;
      form.current.appendChild(input);

      // Crear un campo oculto en el formulario para el monto total
      const totalInput = document.createElement("input");
      totalInput.type = "hidden";
      totalInput.name = "totalAmount";
      totalInput.value = totalAmount.toString();
      form.current.appendChild(totalInput);

      emailjs
        .sendForm("service_65ahc09", "template_a05rk6o", form.current, {
          publicKey: "9TpLtLJ_GQin1KkmZ",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            handleResetCart();
            toast.success("Email sent successfully!");
            setIsLoading(false);
          },
          (error) => {
            console.log("FAILED...", error.text);
            toast.error("Error sending email, try again later.");
            setIsLoading(false);
          }
        );
    } else {
      console.log("Form is not available");
    }
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("The first name is required"),
    lastName: Yup.string().required("The last name is required"),
    email: Yup.string()
      .email("Invalid email")
      .required("The email is required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]*$/, "Only numbers are allowed")
      .required("The phone number is required"),
    address: Yup.string().required("The address is required"),
    zipCode: Yup.string()
      .matches(/^[0-9]*$/, "Only numbers are allowed")
      .required("The zip code is required"),
    city: Yup.string().required("The city is required"),
    state: Yup.string().required("The state is required"),
    country: Yup.string().required("The country is required"),
  });

  return (
    <div className="w-full bg-background-primary pt-10">
      <div className="font-sans">
        <div>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: "",
              address: "",
              zipCode: "",
              city: "",
              state: "",
              country: "",
            }}
            validationSchema={validationSchema}
            onSubmit={sendEmail}
          >
            <Form ref={form}>
              <div className="mt-10 w-full">
                <div className="mx-10 flex flex-col sm:flex-row">
                  {/* CONTACT FORM */}
                  <div className="w-full text-text-primary sm:w-2/3">
                    <div className="">
                      <h1 className="text-3xl font-bold tracking-tight text-text-title">
                        Contact Details
                      </h1>
                      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                        <CustomField
                          fieldName="firstName"
                          fieldId="first-name"
                          fieldLabel="First name"
                          placeholder="Charlie"
                          fieldType="text"
                        />

                        <CustomField
                          fieldName="lastName"
                          fieldId="last-name"
                          fieldLabel="Last name"
                          placeholder="Harper"
                          fieldType="text"
                        />

                        <CustomField
                          fieldName="email"
                          fieldId="email"
                          fieldLabel="Email address"
                          placeholder="charlie.harper@example.com"
                          fieldType="email"
                        />

                        <CustomField
                          fieldName="phoneNumber"
                          fieldId="phone-number"
                          fieldLabel="Phone number"
                          placeholder="+1 555 987 6543"
                          fieldType="text"
                        />
                      </div>
                    </div>
                    <div className="mb-10 mt-10 border-t border-gray-500 pt-10">
                      <h1 className="text-3xl font-bold tracking-tight text-text-title">
                        Shipping Address
                      </h1>
                      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                        <CustomField
                          fieldName="address"
                          fieldId="address"
                          fieldLabel="Address"
                          placeholder="1132 Malibu Road"
                          fieldType="text"
                        />

                        <CustomField
                          fieldName="zipCode"
                          fieldId="zip-code"
                          fieldLabel="ZIP code"
                          placeholder="90265"
                          fieldType="text"
                        />

                        <CustomField
                          fieldName="city"
                          fieldId="city"
                          fieldLabel="City"
                          placeholder="Malibu"
                          fieldType="text"
                        />

                        <CustomField
                          fieldName="state"
                          fieldId="state"
                          fieldLabel="State / Province"
                          placeholder="California"
                          fieldType="text"
                        />

                        <CustomField
                          fieldName="country"
                          fieldId="country"
                          fieldLabel="Country"
                          placeholder="United States"
                          fieldType="text"
                        />
                      </div>
                    </div>
                  </div>

                  {/* SIDEBAR */}
                  <div className="mb-10 mt-10 w-full sm:ml-10 sm:mt-0 sm:w-1/2">
                    <div className="flex items-end justify-between">
                      <h1 className="mb-5 text-3xl font-bold tracking-tight text-text-title">
                        Your Order
                      </h1>
                      <p className="mb-5 mr-2 text-sm font-medium leading-6 text-text-secondary">
                        {products.reduce(
                          (total, product) => (total += product.quantity),
                          0
                        )}
                        {products.length === 1 ? "item" : "items"}
                      </p>
                    </div>
                    <div className="rounded-lg border border-gray-500 bg-background-secondary text-text-primary shadow-sm">
                      {/* CART */}
                      <div>
                        {products.length !== 0 && (
                          <div>
                            <ul
                              role="list"
                              className="h-96 divide-y divide-gray-500 overflow-auto border-b border-gray-500"
                            >
                              {products.map((product) => (
                                <li
                                  key={product.product.name}
                                  className="flex border-b border-gray-500 px-4 py-6 transition-colors duration-200 ease-in-out hover:bg-gray-500/10 sm:px-6"
                                >
                                  <div className="flex-shrink-0">
                                    <img
                                      src={product.product.image}
                                      alt=""
                                      className="w-20 rounded-md"
                                    />
                                  </div>

                                  <div className="ml-6 flex flex-1 flex-col">
                                    <div className="flex">
                                      <div className="min-w-0 flex-1">
                                        <h4 className="text-sm">
                                          <a className="font-medium">
                                            {product.product.name}
                                          </a>
                                        </h4>
                                        <p className="mt-1 text-sm text-text-secondary">
                                          {product.product.moreInfo.brand}
                                        </p>
                                      </div>

                                      <div className="ml-1 flow-root flex-shrink-0">
                                        <button
                                          type="button"
                                          className="-m-2.5 flex items-center justify-center rounded-xl p-2.5 text-text-primary transition-colors duration-200 ease-in-out"
                                          onClick={() =>
                                            handleRemoveAllFromCart(
                                              product.product
                                            )
                                          }
                                        >
                                          <span className="sr-only">
                                            Remove
                                          </span>
                                          <TrashIcon
                                            className="h-5 w-5 text-text-primary"
                                            aria-hidden="true"
                                          />
                                        </button>
                                      </div>
                                    </div>

                                    <div className="flex flex-1 items-center justify-between pt-2">
                                      <p className="mt-1 text-sm font-medium text-text-primary">
                                        $ {product.product.price}
                                      </p>
                                      <div className="ml-4">
                                        <label className="sr-only">
                                          Quantity
                                        </label>
                                        <div className="flex items-center">
                                          <button
                                            type="button"
                                            className="rounded-l-md border border-text-secondary px-2 py-1 text-sm font-medium text-text-primary hover:bg-accent"
                                            onClick={() =>
                                              handleRemoveFromCart(
                                                product.product
                                              )
                                            }
                                          >
                                            <strong> - </strong>
                                          </button>
                                          <div className="w-12 border-b border-t border-gray-300 px-2 py-1 text-center text-sm font-medium text-text-primary">
                                            {product.quantity}
                                          </div>
                                          <button
                                            type="button"
                                            className="rounded-r-md border border-gray-300 px-2 py-1 text-sm font-medium text-text-primary hover:bg-accent"
                                            onClick={() =>
                                              handleAddToCart(product.product)
                                            }
                                          >
                                            +
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* EMPTY STATE */}
                      <div>
                        {products.length === 0 && (
                          <div className="flex h-96 items-center justify-center">
                            <div className="relative block flex h-full w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-text-secondary p-12 text-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                shape-rendering="geometricPrecision"
                                text-rendering="geometricPrecision"
                                image-rendering="optimizeQuality"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                viewBox="0 0 403 512.4"
                                className="text-primary mx-auto mb-6 h-24 w-24"
                              >
                                <path
                                  fill="white"
                                  d="M18.67 114.75h85.03v-17.3c0-26.81 10.97-51.18 28.62-68.83S174.33 0 201.15 0c26.81 0 51.19 10.97 68.84 28.62 17.65 17.65 28.61 42.02 28.61 68.83v17.3h85.73c5.15 0 9.81 2.13 13.17 5.49l.91 1.02c2.86 3.3 4.59 7.59 4.59 12.16v311.99c0 18.39-7.55 35.15-19.7 47.29-12.14 12.14-28.9 19.7-47.29 19.7H66.98c-18.35 0-35.12-7.56-47.28-19.72C7.55 480.58 0 463.83 0 445.41V133.42c0-5.14 2.11-9.83 5.48-13.19 3.36-3.37 8.05-5.48 13.19-5.48zm129.71 181.38c-5.02-5.01-5.02-13.16 0-18.17 5.01-5.02 13.16-5.02 18.17 0l34.95 34.94 34.95-34.94c5.01-5.02 13.16-5.02 18.17 0 5.02 5.01 5.02 13.16 0 18.17l-34.94 34.95 34.94 34.94c5.02 5.02 5.02 13.16 0 18.18-5.01 5.01-13.16 5.01-18.17 0l-34.95-34.95-34.95 34.95c-5.01 5.02-13.16 5.02-18.18 0-5.01-5.01-5.01-13.16 0-18.17l34.95-34.95-34.94-34.95zm-20.92-181.38h147.38v-17.3c0-20.25-8.29-38.68-21.65-52.03-13.36-13.36-31.79-21.66-52.04-21.66s-38.68 8.3-52.03 21.66c-13.36 13.35-21.66 31.78-21.66 52.03v17.3zm-23.76 46.09v-22.31H23.78v306.88c0 11.86 4.88 22.65 12.71 30.48 7.81 7.87 18.62 12.72 30.49 12.72h269.03c11.83 0 22.64-4.89 30.48-12.72 7.84-7.84 12.73-18.65 12.73-30.48V138.53H298.6v22.56c8.82 4.48 14.86 13.64 14.86 24.21 0 14.99-12.15 27.15-27.15 27.15-14.99 0-27.15-12.16-27.15-27.15 0-10.9 6.42-20.29 15.68-24.62v-22.15H127.46v22.4c8.99 4.42 15.18 13.67 15.18 24.37 0 14.99-12.15 27.15-27.15 27.15-14.99 0-27.14-12.16-27.14-27.15 0-10.77 6.26-20.07 15.35-24.46z"
                                />
                              </svg>
                              <span className="my-2 block text-sm font-semibold text-text-primary">
                                It looks like you haven’t added any products to
                                your cart yet.
                                <br />
                                Start shopping now and treat yourself to some
                                beauty magic!
                              </span>
                              <button>
                                <HashLink
                                  smooth
                                  to="/products#top"
                                  className="mt-8 inline-flex items-center rounded-md border border-transparent bg-accent px-4 py-2 
                                  text-sm font-medium text-text-button hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                  Start shopping
                                </HashLink>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* TOTAL */}
                      <div>
                        <dl className="space-y-6 border-gray-500 px-4 py-6 text-text-primary sm:px-6">
                          <div className="flex items-center justify-between text-2xl">
                            <dt className="font-medium">Total</dt>
                            <dd className="mr-2 font-medium">
                              $ {subtotal.toFixed(2)}
                            </dd>
                          </div>
                        </dl>
                        <div className="border-t border-gray-500 px-4 py-6 sm:px-6">
                          <button
                            type="submit"
                            className={`flex w-full items-center justify-center rounded-md border border-transparent px-4 py-3 
                              text-base font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 
                              ${
                                isLoading || products.length === 0
                                  ? "scale-90 cursor-not-allowed bg-gray-400"
                                  : "bg-accent hover:bg-accent-hover focus:ring-indigo-500 focus:ring-offset-gray-50"
                              } text-text-button`}
                            disabled={isLoading || products.length === 0}
                          >
                            {isLoading ? (
                              <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-400 border-t-blue-600" />
                            ) : (
                              "Confirm order"
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
