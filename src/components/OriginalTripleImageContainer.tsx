export const TripleImageContainer = () => {
  return (
    <div>
      <div className="mt-12 flex items-center justify-center">
        <h1 className="text-center text-4xl text-text-primary sm:text-5xl">
          Nuestros productos
        </h1>
      </div>
      <div className="mx-10 mb-5 mt-4 flex items-center justify-center">
        <p className="mb-5 mt-3 text-center font-thin">
          Descubrí nuestra selección de artefactos para cultivos de interior
          hechos 100% en Argentina.
        </p>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col md:flex-row">
        <div className="flex w-full items-center justify-center p-12 md:w-1/3">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/kiev-ingenieria-ecommerc-800f3.appspot.com/o/productos%2FA200%2FA200-foto-2.webp?alt=media&token=df2e082e-647f-4811-8e9c-0f1527acb1cd"
            alt="Imagen izquierda"
            className="h-1/3 w-full max-w-lg rounded-xl object-cover"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center md:w-1/3 ">
          <div className="flex h-1/3 w-full items-center justify-center p-12">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kiev-ingenieria-ecommerc-800f3.appspot.com/o/productos%2FA200%2FA200-foto-1.webp?alt=media&token=05ab06d5-dac4-4500-88cc-61262e8555b5"
              alt="Imagen derecha superior"
              className="h-1/3 max-h-full w-full max-w-lg rounded-xl object-cover md:h-full md:max-w-full"
            />
          </div>
          <div className="flex h-1/3 w-full items-center justify-center p-12">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kiev-ingenieria-ecommerc-800f3.appspot.com/o/productos%2FH5%2FH5-1.webp?alt=media&token=ab9e3999-b8de-42c2-8c18-e89d40678f5b"
              alt="Imagen derecha inferior"
              className="h-1/3 max-h-full w-full max-w-lg rounded-xl object-cover md:h-full md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
