import React from 'react';

const TextSection: React.FC = () => {
  return (
    <section className="lg:px-8 mx-auto">
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="overflow absolute inset-0 bg-cover bg-fixed bg-center"
          style={{
            backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/kiev-ingenieria-ecommerc-800f3.appspot.com/o/productos%2FA200%2FA200-foto-2.webp?alt=media&token=df2e082e-647f-4811-8e9c-0f1527acb1cd')",
          }}
        ></div>
        <div className="lg:px-16 relative bg-gray-900 bg-opacity-75 px-6 py-20">
          <div className="relative mx-auto flex flex-col justify-center sm:flex-row">
            <div className="rounded-lg">
              <section
                className="mx-auto max-w-md px-6 sm:max-w-3xl md:max-w-7xl md:px-"
                aria-labelledby="faq-heading"
              >
                <h2 className="text-center text-4xl font-bold text-white">
                  Acerca de KIEV Ingeniería
                </h2>

                <div className="mx-auto mt-4 max-w-prose text-center">
                  <p className="text-white">
                    Nuestra empresa fue fundada con la visión de crear
                    herramientas de cultivo que maximicen la eficiencia y
                    productividad. Nos especializamos en el desarrollo y
                    fabricación de equipos esenciales para el cultivo indoor,
                    asegurando que cada producto cumpla con los más altos
                    estándares de calidad y rendimiento.
                  </p>
                </div>

                <div className="mt-10 border-t border-gray-200 pt-10">
                  <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-12 md:space-y-0">
                    <div className="rounded-lg bg-black bg-opacity-40 p-8 backdrop-blur-md backdrop-filter p-6 shadow-md">
                      <dt className="text-lg font-medium text-white">
                        Título 1
                      </dt>
                      <dd className="mt-2 text-base text-white">
                        Nos esforzamos por ofrecer productos que no solo sean
                        funcionales, sino también accesibles y fáciles de usar.
                        Creemos que un buen cultivo comienza con las
                        herramientas adecuadas, y nos comprometemos a apoyarte
                        en cada paso del proceso.
                      </dd>
                    </div>
                    <div className="rounded-lg bg-black bg-opacity-40 p-8 backdrop-blur-md backdrop-filter p-6 shadow-md">
                      <dt className="text-lg font-medium text-white">
                        Título 2
                      </dt>
                      <dd className="mt-2 text-base text-white">
                        En Kiev Ingeniería, nos enorgullece ser parte de tu
                        aventura en el cultivo indoor. Estamos aquí para
                        brindarte el soporte y asesoramiento que necesitas para
                        alcanzar el éxito en cada cosecha. Explora nuestras
                        soluciones y lleva tu cultivo al siguiente nivel.
                      </dd>
                    </div>
                  </dl>
                </div>
                
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextSection;