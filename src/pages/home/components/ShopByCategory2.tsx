import { setSingleFilter } from "@/store/filters";
import { useDispatch } from "react-redux";
import { HashLink } from "react-router-hash-link";
import HumidificadorPicture from "@/assets/products/H5-1.webp";
import A200Picture from "@/assets/products/A200-foto-1.webp";
import V16Picture from "@/assets/products/V16.png";

const ImageContainer = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="mt-20 flex items-center justify-center" data-aos="zoom-in-down">
        <h1 className="text-center text-4xl text-text-primary sm:text-5xl">
          Explorá lo que tenemos para vos
        </h1>
      </div>
      <div className="mx-10 mb-5 mt-4 flex items-center justify-center" data-aos="zoom-in-up">
        <p className="mb-5 mt-3 text-center font-thin">
          Descubrí nuestra selección de artefactos para cultivos de interior
          hechos 100% en Argentina.
        </p>
      </div>
      <div className="mx-auto mb-5 mt-4 h-full max-w-4xl flex-col gap-10 px-10 sm:grid sm:grid-cols-2">
        <div className="lg:h-96 group relative mb-10 h-72 overflow-hidden rounded-3xl sm:mb-0 sm:h-full" data-aos="zoom-in-right">
          <div className="absolute inset-0">
            <img
              src={HumidificadorPicture}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div aria-hidden="true" className="lg:hidden relative h-96 w-full" />
          <div aria-hidden="true" className="lg:hidden relative h-32 w-full" />
          <div className="lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 opacity-0 backdrop-blur backdrop-filter transition-opacity duration-500 ease-in-out group-hover:opacity-100">
            <div>
              <h2 className="text-xl font-bold text-white">Humidificadores</h2>
              <p className="mt-1 text-sm text-gray-300">
                Mejorá tu indoor con nuestros humidificadores, calidad
                garantizada.
              </p>
            </div>

            <HashLink
              smooth
              to="/products#top"
              className="lg:ml-0 lg:w-full mt-6 flex flex-shrink-0 items-center justify-center rounded-3xl border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10"
              onClick={() => {
                dispatch(setSingleFilter("Humidificadores"));
              }}
            >
              Mirá nuestra colección
            </HashLink>
          </div>
        </div>
        <div
          className="flex h-full flex-col items-center justify-center sm:gap-10"
          data-aos="zoom-in-left"
        >
          <div className="lg:h-96 lg:overflow-hidden group relative mb-10 rounded-3xl sm:mb-0">
            <div className="flex items-center justify-center">
              <img
                src={A200Picture}
                alt="Imagen derecha superior"
                className="h-full w-full rounded-3xl"
              />
            </div>
            <div className="lg:w-96 lg:flex-col lg:items-start absolute inset-x-0 bottom-0 rounded-bl-3xl rounded-br-3xl rounded-br-3xl rounded-tl-3xl bg-black bg-opacity-75 p-6 opacity-0 backdrop-blur backdrop-filter transition-opacity duration-500 ease-in-out group-hover:opacity-100 sm:flex sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">Lámparas</h2>
                <p className="mt-1 text-sm text-gray-300">
                  {" "}
                  Iluminá tu indoor con nuestras luces LED.
                </p>
              </div>
              <HashLink
                smooth
                to="/products#top"
                className="lg:ml-0 lg:w-full mt-6 flex flex-shrink-0 items-center justify-center rounded-3xl border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10"
                onClick={() => {
                  dispatch(setSingleFilter("Lámparas"));
                }}
              >
                Mirá nuestra colección
              </HashLink>
            </div>
          </div>

          <div
            className="lg:h-96 lg:overflow-hidden group relative rounded-3xl"
            data-aos="fade-up"
          >
            <div className="flex items-center justify-center">
              <img
                src={V16Picture}
                alt="Imagen derecha superior"
                className="h-full w-full rounded-3xl"
              />
            </div>
            <div className="lg:w-96 lg:flex-col lg:items-start absolute inset-x-0 bottom-0 rounded-bl-3xl rounded-br-3xl rounded-br-3xl rounded-tl-3xl bg-black bg-opacity-75 p-6 opacity-0 backdrop-blur backdrop-filter transition-opacity duration-500 ease-in-out group-hover:opacity-100 sm:flex sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">Ventiladores</h2>
                <p className="mt-1 text-sm text-gray-300">
                  {" "}
                  Mantené tu indoor fresco.
                </p>
              </div>
              <HashLink
                smooth
                to="/products#top"
                className="lg:ml-0 lg:w-full mt-6 flex flex-shrink-0 items-center justify-center rounded-3xl border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10"
                onClick={() => {
                  dispatch(setSingleFilter("Ventiladores"));
                }}
              >
                Mirá nuestra colección
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImageContainer;
