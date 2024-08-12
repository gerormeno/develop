const ImageContainer = () => {
  return (
    <div>
      <div className="mt-20 flex items-center justify-center">
        <h1 className="text-center text-4xl text-text-primary sm:text-5xl">
          Nuestros Productos
        </h1>
      </div>
      <div className="mx-10 mb-5 mt-4 flex items-center justify-center">
        <p className="mb-5 mt-3 text-center font-thin">
          Descubre nuestra selección de artefactos para cultivos de interior
          hechos en Argentina.
        </p>
      </div>
      <div className="mx-auto mb-5 mt-4 max-w-4xl flex-col gap-10 px-10 sm:grid sm:grid-cols-2">
        <div className="lg:h-96 relative mb-10 overflow-hidden rounded-3xl sm:mb-0">
          <div className="absolute inset-0">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kiev-ingenieria-ecommerc-800f3.appspot.com/o/productos%2FA640%2FA640-1.webp?alt=media&token=279cfcff-a50c-4275-a35b-6bbf09fd0b3d"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div aria-hidden="true" className="lg:hidden relative h-96 w-full" />
          <div aria-hidden="true" className="lg:hidden relative h-32 w-full" />
          <div className="lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter">
            <div>
              <h2 className="text-xl font-bold text-white">
                Workspace Collection
              </h2>
              <p className="mt-1 text-sm text-gray-300">
                Upgrade your desk with objects that keep you organized and
                clear-minded.
              </p>
            </div>
            <a
              href="#"
              className="lg:ml-0 lg:w-full mt-6 flex flex-shrink-0 items-center justify-center rounded-3xl border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10"
            >
              View the collection
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center sm:gap-10">
          <div className="lg:h-96 rounded-3xl lg:overflow-hidden relative mb-10 sm:mb-0">
            <div className="flex items-center justify-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kiev-ingenieria-ecommerc-800f3.appspot.com/o/productos%2FA200%2FA200-foto-1.webp?alt=media&token=05ab06d5-dac4-4500-88cc-61262e8555b5"
                alt="Imagen derecha superior"
                className="h-full w-full rounded-3xl sm:w-full"
              />
            </div>
            <div className="lg:w-96 lg:flex-col lg:items-start rounded-br-3xl rounded-tl-3xl absolute inset-x-0 bottom-0 rounded-bl-3xl rounded-br-3xl bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">
                  Workspace Collection
                </h2>
                <p className="mt-1 text-sm text-gray-300">Upgrade your desk</p>
              </div>
              <a
                href="#"
                className="lg:ml-0 lg:w-full mt-6 flex flex-shrink-0 items-center justify-center rounded-3xl border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0"
              >
                View the collection
              </a>
            </div>
          </div>

          <div className="lg:h-96 rounded-3xl lg:overflow-hidden relative">
            <div className="flex items-center justify-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kiev-ingenieria-ecommerc-800f3.appspot.com/o/productos%2FA200%2FA200-foto-2.webp?alt=media&token=df2e082e-647f-4811-8e9c-0f1527acb1cd"
                alt="Imagen derecha superior"
                className="h-full w-full rounded-3xl sm:w-full"
              />
            </div>
            <div className="lg:w-96 lg:flex-col lg:items-start rounded-br-3xl rounded-tl-3xl absolute inset-x-0 bottom-0 rounded-bl-3xl rounded-br-3xl bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">
                  Workspace Collection
                </h2>
                <p className="mt-1 text-sm text-gray-300">Upgrade your desk</p>
              </div>
              <a
                href="#"
                className="lg:ml-0 lg:w-full mt-6 flex flex-shrink-0 items-center justify-center rounded-3xl border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0"
              >
                View the collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImageContainer;
