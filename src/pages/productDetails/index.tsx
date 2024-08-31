import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/firebase-config";
import { useAuth } from "@/security/AuthContext";
import GenericProductImage from "@/assets/adminPanel/picture-not-available.jpg";
import { RadioGroup } from "@headlessui/react";
import { QuestionMarkCircleIcon, StarIcon } from "@heroicons/react/20/solid";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cart";
import { Product } from "@/types/product.type";
import { toast } from "react-toastify";

const reviews = {
  average: 4,
  totalCount: 1624,
  counts: [
    { rating: 5, count: 1019 },
    { rating: 4, count: 162 },
    { rating: 3, count: 97 },
    { rating: 2, count: 199 },
    { rating: 1, count: 147 },
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
      author: "Emily Selman",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Option = {
  nombre: string;
  descripcion: string;
  precio: number;
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [producto, setProducto] = useState<Product>();
  const productsCollection = collection(db, "products");
  const { isUserLoggedIn } = useAuth();
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    selectedOption && producto && producto.opciones
      ? dispatch(
          addToCart({
            product: product,
            option: selectedOption.nombre,
            price: selectedOption.precio,
          })
        )
      : dispatch(addToCart({ product: product, price: product.precio }));
    notifyAddToCart();
  };

  const notifyAddToCart = () => {
    toast.success("Product added to cart!");
  };

  const getProduct = async (productName: string) => {
    const q = query(productsCollection, where("nombre", "==", productName));
    const productsSnapshot = await getDocs(q);
    const productsList = productsSnapshot.docs.map((doc) => doc.data());
    productsList[0] && setProducto(productsList[0] as Product);
  };

  const pictures =
    producto && producto.fotos.length > 0
      ? producto.fotos
      : [GenericProductImage];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  };

  useEffect(() => {
    if (id) {
      getProduct(id);
    }
  }, [id]);

  const disableButton =
    isUserLoggedIn ||
    (producto && !producto.activo) ||
    (producto &&
      producto.opciones &&
      producto.opciones.length > 0 &&
      !selectedOption);

  return (
    <div className="bg-gray-50 pt-10">
      <main>
        {/* Product detail */}
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 pt-24 sm:px-6 sm:pb-32 md:grid md:max-w-7xl md:grid-cols-2 md:gap-x-8 md:px-8">
            {/* Product details */}
            <div className="md:max-w-lg md:self-end">
              <nav aria-label="Breadcrumb">
                <ol role="list" className="flex items-center space-x-2">
                  <li>
                    <div className="flex items-center text-sm">
                      <a className="font-medium text-gray-500 hover:text-gray-900">
                        Productos
                      </a>
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
                      >
                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                      </svg>
                      <a className="ml-2 font-medium text-gray-500 hover:text-gray-900">
                        {producto?.categoria}
                      </a>
                    </div>
                  </li>
                </ol>
              </nav>

              <div className="mt-4">
                {producto && (
                  <>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      {producto.nombre}
                    </h1>
                    <p className="mt-2 text-base font-thin text-gray-600">
                      {producto.categoria}
                    </p>
                  </>
                )}
              </div>

              <section aria-labelledby="information-heading" className="mt-4">
                <h2 id="information-heading" className="sr-only">
                  Product information
                </h2>

                <div className="flex items-center">
                  {producto && (
                    <p className="text-lg text-gray-900 sm:text-xl">
                      $ { selectedOption ? selectedOption.precio.toLocaleString("es-ES") :
                       producto.precio.toLocaleString("es-ES")}
                    </p>
                  )}

                  <div className="ml-4 border-l border-gray-300 pl-4">
                    <h2 className="sr-only">Reviews</h2>
                    <div className="flex items-center">
                      <div>
                        <div className="flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              className={classNames(
                                reviews.average > rating
                                  ? "text-yellow-400"
                                  : "text-gray-300",
                                "h-5 w-5 flex-shrink-0"
                              )}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <p className="sr-only">
                          {reviews.average} out of 5 stars
                        </p>
                      </div>
                      <p className="ml-2 text-sm text-gray-500">
                        {reviews.totalCount} reviews
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-6">
                  {producto && (
                    <p className="text-base text-gray-500">
                      {producto.descripcion}
                    </p>
                  )}
                </div>

                <div className="mt-6 flex items-center">
                  {producto && producto.activo ? (
                    <>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#4bb453"
                        className="h-10 w-10 flex-shrink-0"
                        aria-hidden="true"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M17 9L9.99998 16L6.99994 13"
                            stroke="#4bb453"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </g>
                      </svg>
                      <p className="ml-2 text-sm text-gray-500">Disponible</p>
                    </>
                  ) : (
                    <>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 flex-shrink-0"
                        aria-hidden="true"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M16 8L8 16M8.00001 8L16 16"
                            stroke="#fc100d"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </g>
                      </svg>
                      <p className="ml-2 text-sm text-gray-500">
                        Fuera de stock
                      </p>
                    </>
                  )}
                </div>
              </section>
            </div>

            {/* Product image */}
            <div className="mt-10 md:col-start-2 md:row-span-2 md:mt-0 md:self-center">
              <div className="mt-10 md:col-start-2 md:row-span-2 md:mt-0 md:self-center">
                <div className="aspect-h-1 aspect-w-1 relative overflow-hidden rounded-lg">
                  {producto && (
                    <>
                      <img
                        src={pictures[currentImageIndex]}
                        alt="Producto"
                        className="h-full w-full object-cover object-center transition-transform duration-500 ease-in-out"
                        loading="lazy"
                        style={{ objectFit: "cover" }}
                      />
                      {pictures.length > 1 && (
                        <>
                          <button
                            onClick={handlePrevImage}
                            className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-800 bg-opacity-50 p-2 text-white hover:ring-2 hover:ring-white focus:outline-none focus:ring-0"
                            aria-label="Previous image"
                          >
                            &#9664;
                          </button>
                          <button
                            onClick={handleNextImage}
                            className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-800 bg-opacity-50 p-2 text-white hover:ring-2 hover:ring-white focus:outline-none focus:ring-0"
                            aria-label="Next image"
                          >
                            &#9654;
                          </button>
                          <div className="absolute bottom-0 left-1/2 mb-4 flex -translate-x-1/2 transform space-x-2">
                            {pictures.map((_: any, index: number) => (
                              <span
                                key={index}
                                className={`h-2 w-2 rounded-full ${
                                  index === currentImageIndex
                                    ? "bg-white"
                                    : "bg-gray-400"
                                }`}
                              ></span>
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Product form */}
            {producto && producto.opciones && producto.opciones.length > 0 && (
              <div className="mt-10 md:col-start-1 md:row-start-2 md:max-w-lg md:self-start">
                <section aria-labelledby="options-heading">
                  <h2 id="options-heading" className="sr-only">
                    Product options
                  </h2>

                  <div className="sm:flex sm:justify-between">
                    {/* Size selector */}
                    <RadioGroup
                      value={selectedOption}
                      onChange={setSelectedOption}
                    >
                      <RadioGroup.Label className="block text-sm font-medium text-gray-700">
                        Opciones
                      </RadioGroup.Label>
                      <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {producto.opciones.map((option) => (
                          <RadioGroup.Option
                            as="div"
                            key={option.nombre}
                            value={option}
                            className={({ active }) =>
                              classNames(
                                active ? "ring-2 ring-indigo-500" : "",
                                "relative block cursor-pointer rounded-lg border border-gray-300 p-4 focus:outline-none"
                              )
                            }
                          >
                            {({ active, checked }) => (
                              <>
                                <RadioGroup.Label
                                  as="p"
                                  className="text-base font-medium text-gray-900"
                                >
                                  {option.nombre}
                                </RadioGroup.Label>
                                <RadioGroup.Description
                                  as="p"
                                  className="mt-1 text-sm text-gray-500"
                                >
                                  {option.descripcion}
                                </RadioGroup.Description>
                                <div
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked
                                      ? "border-indigo-500"
                                      : "border-transparent",
                                    "pointer-events-none absolute -inset-px rounded-lg"
                                  )}
                                  aria-hidden="true"
                                />
                              </>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                  {producto &&
                    producto.opciones &&
                    producto.opciones.length > 1 && (
                      <div className="mt-4">
                        <a
                          href="#"
                          className="group inline-flex text-sm text-gray-500 hover:text-gray-700"
                        >
                          <span>Que opcion deberia comprar?</span>
                          <QuestionMarkCircleIcon
                            className="ml-2 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    )}
                </section>
              </div>
            )}
            <div className="mt-10">
              {producto &&
                producto.opciones &&
                producto.opciones.length > 0 &&
                selectedOption && (
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 my-4">
                    <p className="text-sm text-gray-500">
                      Selección: {selectedOption?.nombre}
                    </p>
                    <p className="text-sm text-gray-500">
                      Precio: $ {selectedOption?.precio.toLocaleString("es-ES")}
                    </p>
                  </div>
                )}

              <button
                onClick={() => {
                  if (producto) {
                    handleAddToCart(producto);
                  } else {
                    console.error("Producto no definido");
                  }
                }}
                className={`flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 ${
                  disableButton
                    ? "cursor-not-allowed bg-gray-400"
                    : "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"
                }`}
                disabled={disableButton}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>

        {/* Details section */}
        {producto && producto.caracteristicas && (
          <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 md:max-w-7xl md:px-8">
            <section aria-labelledby="details-heading">
              <div className="flex flex-col items-center text-center">
                <h2
                  id="details-heading"
                  className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                >
                  Detalles
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-gray-600">
                  Our patented padded snack sleeve construction protects your
                  favorite treats from getting smooshed during all-day
                  adventures, long shifts at work, and tough travel schedules.
                </p>
              </div>
              <div className="mx-auto mt-16 grid grid-cols-1 items-center justify-items-center gap-y-16">
                <div className="lg:px-8 mx-auto max-w-7xl px-6">
                  <div className="lg:mx-0 lg:max-w-none lg:grid-cols-3 mx-auto grid max-w-2xl grid-cols-1 justify-items-center gap-x-8 gap-y-16 sm:gap-y-20">
                    <dl className="lg:gap-y-16 col-span-2 grid grid-cols-1 justify-items-center gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2">
                      {producto.caracteristicas.map(
                        (caracteristica: string) => (
                          <div key={caracteristica} className="relative pl-9">
                            <dt className="font-semibold text-gray-900">
                              <svg
                                className="absolute left-0 top-1 h-8 w-8"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                  id="SVGRepo_tracerCarrier"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M15.4933 6.93502C15.8053 7.20743 15.8374 7.68122 15.565 7.99325L7.70786 16.9933C7.56543 17.1564 7.35943 17.25 7.14287 17.25C6.9263 17.25 6.72031 17.1564 6.57788 16.9933L3.43502 13.3933C3.16261 13.0812 3.19473 12.6074 3.50677 12.335C3.8188 12.0626 4.29259 12.0947 4.565 12.4068L7.14287 15.3596L14.435 7.00677C14.7074 6.69473 15.1812 6.66261 15.4933 6.93502Z"
                                    fill="#1C274C"
                                  ></path>
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M20.5175 7.01946C20.8174 7.30513 20.829 7.77986 20.5433 8.07981L11.9716 17.0798C11.8201 17.2389 11.6065 17.3235 11.3872 17.3114C11.1679 17.2993 10.9649 17.1917 10.8318 17.0169L10.4035 16.4544C10.1526 16.1249 10.2163 15.6543 10.5458 15.4034C10.8289 15.1878 11.2161 15.2044 11.4787 15.4223L19.4571 7.04531C19.7428 6.74537 20.2175 6.73379 20.5175 7.01946Z"
                                    fill="#1C274C"
                                  ></path>
                                </g>
                              </svg>
                            </dt>
                            <dd className="mt-2">{caracteristica}</dd>
                          </div>
                        )
                      )}
                    </dl>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Tutorial */}
        {producto && producto.linkTutorial && (
          <div className="align-center flex flex flex-col items-center justify-center bg-white text-center">
            <h2 className="pt-20 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tutorial de armado
            </h2>
            <iframe
              width="800"
              height="500"
              src={producto.linkTutorial}
              title="Turorial armado Pripíat 200 versión KIT"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="p-20"
            ></iframe>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductDetail;
