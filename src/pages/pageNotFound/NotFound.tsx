const NotFound = () => {
  return (
    <section className="bg-background-primary pt-20">
      <div className="max-w-screen-xl lg:py-16 lg:px-6 mx-auto px-4 py-8">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="lg:text-9xl mb-4 text-7xl font-extrabold tracking-tight text-accent hover:text-accent-hover">
            404
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-text-primary dark:text-white md:text-4xl">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-text-secondary">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>
          <a
            href="/"
            className="focus:ring-primary-300 my-4 inline-flex rounded-lg bg-accent px-5 
            py-2.5 text-center text-sm font-medium text-text-button hover:bg-accent-hover focus:outline-none focus:ring-4"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
