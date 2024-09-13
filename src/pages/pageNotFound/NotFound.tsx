const NotFound = () => {
  return (
    <section className="bg-background-primary my-32">
      <div className="max-w-screen-xl lg:py-16 lg:px-6 mx-auto px-4 py-8">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="lg:text-9xl mb-4 text-7xl font-extrabold tracking-tight text-accent hover:text-accent-hover">
            404
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-accent dark:text-accent md:text-4xl">
            Ups! Algo salió mal.
          </p>
          <p className="mb-4 text-lg font-light text-accent">
            Parece que esta página ya no está disponible o nunca existió. ¿Qué tal si volvemos a empezar?
          </p>
          <a
            href="/"
            className="focus:ring-primary-300 my-4 inline-flex rounded-lg bg-accent px-5 
            py-2.5 text-center text-sm font-medium text-text-button hover:bg-accent-hover focus:outline-none focus:ring-4"
          >
            Volver a la página principal
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
