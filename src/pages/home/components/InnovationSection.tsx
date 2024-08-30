const InnovationSection = () => {
  return (
    <div className="mb-20">
      <div className="mx-auto mt-20 mb-10 flex max-w-4xl flex-col items-center justify-between bg-white p-6 md:flex-row md:items-start">
        <div className="mb-6 md:mb-0">
          <h1 className="mb-4 text-4xl text-black text-center">
            Innovación en artefactos para cultivos
          </h1>
        </div>
        <div className="text-center md:ml-10 md:text-left">
          <p className="mb-4 text-gray-700">
            Somos una agencia que vende artefactos para cultivos, como lámparas
            y humidificadores, destacándonos por usar productos argentinos en
            nuestra marca.
          </p>
          <div className="flex justify-center space-x-10">
            <div className="m-5">
              <p className="text-5xl text-[#4A6F4B]">15+</p>
              <p className="text-gray-700">Años de experiencia</p>
            </div>
            <div className="m-5 pr-8">
              <p className="text-5xl text-[#4A6F4B]">1200+</p>
              <p className="text-gray-700">Ventas realizadas</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-3xl">
        <div aria-hidden="true" className="overflow absolute inset-0">
          <img
            className="h-full w-full object-cover object-center"
            src="https://firebasestorage.googleapis.com/v0/b/kiev-ingenieria-ecommerc-800f3.appspot.com/o/productos%2FH5%2FH5-1.webp?alt=media&token=ab9e3999-b8de-42c2-8c18-e89d40678f5b"
            alt=""
          />
        </div>
        <div className="lg:px-16 relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center"></div>
        </div>
      </div>
    </div>
  );
};

export default InnovationSection;
