import { Product } from "@/types/product.type.ts";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { resetCart } from "@/store/cart";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { HashLink } from "react-router-hash-link";
import CustomField from "./components/CustomField";
import NotAvailableImg from "@/assets/adminPanel/picture-not-available.jpg";

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

export default function Example() {
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const products: CartProduct[] = useSelector(
    (store: Store) => store.cart.items
  );

  const subtotal = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  useEffect(() => {
    calculeTotalAmount();
  }, []);

  const calculeTotalAmount = () => {
    let total = 0;
    products.forEach((product) => {
      total += product.product.precio * product.quantity;
    });
    setTotalAmount(total);
  };

  const form = useRef<HTMLFormElement>(null);

  const dispatch = useDispatch();

  const handleResetCart = () => {
    dispatch(resetCart());
  };

  const sendEmail = () => {
    setIsLoading(true);
    if (form.current) {
      // Crear una cadena de texto con todos los productos y sus cantidades
      let cartItems = "";
      products.forEach((product) => {
        cartItems += `- ${product.product.nombre}: ${product.quantity}`;
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
            toast.success("Email enviado correctamente!");
            setIsLoading(false);
          },
          (error) => {
            console.log("FAILED...", error.text);
            toast.error("Error al enviar el email, prueba de nuevo mas tarde.");
            setIsLoading(false);
          }
        );
    } else {
      console.log("Form is not available");
    }
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("El nombre es obligatorio"),
    lastName: Yup.string().required("El apellido es obligatorio"),
    email: Yup.string()
      .email("Correo electrónico inválido")
      .required("El correo electrónico es obligatorio"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]*$/, "Solo se permiten números")
      .required("El número de teléfono es obligatorio"),
    address: Yup.string().required("La dirección es obligatoria"),
    zipCode: Yup.string()
      .matches(/^[0-9]*$/, "Solo se permiten números")
      .required("El código postal es obligatorio"),
    city: Yup.string().required("La ciudad es obligatoria"),
    state: Yup.string().required("El estado es obligatorio"),
    country: Yup.string().required("El país es obligatorio"),
  });

  return (
    <div className="w-full pt-24">
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
              <div className="w-full">
                <div className="mx-auto flex max-w-7xl flex-col md:flex-row">
                  {/* CONTACT FORM */}
                  <div className="order-2 w-full p-10 text-text-primary md:order-1 md:w-2/3">
                    <div className="">
                      <h1 className="text-lg font-medium text-[#111826]">
                        Detalles de contacto
                      </h1>
                      <div className="mt-4 grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-4">
                        <CustomField
                          fieldName="firstName"
                          fieldId="first-name"
                          fieldLabel="Nombre"
                          placeholder="Charlie"
                          fieldType="text"
                        />

                        <CustomField
                          fieldName="lastName"
                          fieldId="last-name"
                          fieldLabel="Apellido"
                          placeholder="Harper"
                          fieldType="text"
                        />

                        <CustomField
                          fieldName="email"
                          fieldId="email"
                          fieldLabel="Correo electrónico"
                          placeholder="charlie.harper@example.com"
                          fieldType="email"
                        />

                        <CustomField
                          fieldName="phoneNumber"
                          fieldId="phone-number"
                          fieldLabel="Teléfono"
                          placeholder="+1 555 987 6543"
                          fieldType="text"
                        />
                      </div>
                    </div>
                    <div className="mb-10 mt-10 border-t border-[#E5E7EB] pt-10">
                      <h1 className="text-lg font-medium tracking-tight">
                        Dirección de envío
                      </h1>
                      <div className="mb-10 mt-4 grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-4">
                        <CustomField
                          fieldName="address"
                          fieldId="address"
                          fieldLabel="Calle y número"
                          placeholder="1132 Malibu Road"
                          fieldType="text"
                        />
                        <CustomField
                          fieldName="address"
                          fieldId="address"
                          fieldLabel="Piso y departamento (opcional)"
                          placeholder="1132 Malibu Road"
                          fieldType="text"
                        />

                        <CustomField
                          fieldName="city"
                          fieldId="city"
                          fieldLabel="Localidad"
                          placeholder="Malibu"
                          fieldType="text"
                        />

                        <CustomField
                          fieldName="state"
                          fieldId="state"
                          fieldLabel="Provincia"
                          placeholder="California"
                          fieldType="text"
                        />
                        <CustomField
                          fieldName="zipCode"
                          fieldId="zip-code"
                          fieldLabel="Código postal / ZIP"
                          placeholder="90265"
                          fieldType="text"
                        />
                      </div>
                      <div className="border-gray-[#E5E7EB] border-t px-4 py-6 md:px-6">
                        <button
                          type="submit"
                          className={`flex w-full items-center justify-center rounded-md border border-transparent px-4 py-3 
                              text-base font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 
                              ${
                                isLoading || products.length === 0
                                  ? "scale-90 cursor-not-allowed bg-gray-400"
                                  : "bg-accent hover:bg-accent-hover focus:ring-indigo-300 focus:ring-offset-gray-50"
                              } text-text-button`}
                          disabled={isLoading || products.length === 0}
                        >
                          {isLoading ? (
                            <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-400 border-t-blue-600" />
                          ) : (
                            "Confirmar pedido"
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* SIDEBAR */}
                  <div className="order-1 w-full bg-[#F9FAFB] p-10 md:order-2 md:w-1/2">
                    <div className="flex items-end justify-between">
                      <h1 className="mb-5 text-lg font-medium tracking-tight text-[#111827]">
                        Tu orden
                      </h1>
                    </div>
                    <div className="text-text-primary">
                      {/* CART */}
                      <div>
                        {products.length !== 0 && (
                          <div>
                            <ul
                              role="list"
                              className="divide-y divide-[#E5E7EB] overflow-auto border-b border-gray-300 pb-10"
                            >
                              {products.map((product, index) => (
                                <li
                                  key={index}
                                  className="flex border-t border-white border-opacity-25 py-6"
                                >
                                  <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-md border border-gray-300">
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
                                            className="text-2xl font-medium text-cart-text-primary"
                                          >
                                            {product.product.nombre}
                                          </a>
                                        </h3>
                                        <div className="flex">
                                          <p className="text-cart-text-secondary">
                                            cant.: {product.quantity}
                                          </p>
                                        </div>
                                      </div>
                                      {product.option && (
                                        <p className="text-lg text-cart-text-secondary">
                                          {product.option}
                                        </p>
                                      )}
                                    </div>

                                    <div className="flex flex-1 items-end justify-between text-lg"></div>
                                    <p className="text-cart-text-secondary text-xl">
                                      $
                                      {(
                                        product.price * product.quantity
                                      ).toLocaleString("de-DE")}
                                    </p>
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
                                Parece que aún no has añadido ningún producto a
                                tu carrito.
                                <br />
                                ¡Comienza a comprar ahora y date un capricho con
                                las mejores luces para tu indoor!
                              </span>
                              <button>
                                <HashLink
                                  smooth
                                  to="/products#top"
                                  className="mt-8 inline-flex items-center rounded-md border border-transparent bg-accent px-4 py-2 
                                  text-sm font-medium text-text-button hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2"
                                >
                                  Comienza a comprar
                                </HashLink>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* TOTAL */}
                      <div>
                        <dl className="space-y-6 border-gray-300 px-4 py-6 text-text-primary sm:px-6">
                          <div className="flex items-center justify-between">
                            <dt className="font-medium">Total</dt>
                            <dd className="mr-2 font-medium">
                              $ {subtotal.toFixed(2)}
                            </dd>
                          </div> 
                        </dl>
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
