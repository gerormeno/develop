const stats = [
  { label: "Transactions every 24 hours", value: "44 million" },
  { label: "Assets under holding", value: "$119 trillion" },
  { label: "New users annually", value: "46,000" },
];

export default function AboutUsSection() {
  return (
    <div className="bg-white">

      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </svg>
          <div
            className="lg:ml-24 xl:ml-48 absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="lg:px-8 lg:pt-32 mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60">
              <div className="lg:mx-0 lg:flex lg:max-w-none lg:items-center mx-auto max-w-2xl gap-x-14">
                <div className="lg:shrink-0 xl:max-w-2xl w-full max-w-xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Llevamos tu cultivo al siguiente nivel.
                  </h1>
                  <p className="lg:max-w-none relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md">
                    En Kiev Ingeniería, estamos dedicados a proporcionar
                    soluciones innovadoras para el cultivo indoor, combinando
                    tecnología avanzada y diseño eficiente. Nuestra misión es
                    facilitar el proceso de cultivo para todos, desde los
                    principiantes hasta los cultivadores más experimentados.
                  </p>
                </div>
                <div className="lg:mt-0 lg:pl-0 mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20">
                  <div className="lg:order-last lg:pt-36 xl:order-none xl:pt-80 ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80">
                    <div className="relative">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/kiev-ingenieria-ecommerc-800f3.appspot.com/o/productos%2FA200%2FA200-foto-2.webp?alt=media&token=df2e082e-647f-4811-8e9c-0f1527acb1cd"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="lg:pt-36 mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52">
                    <div className="relative">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/kiev-ingenieria-ecommerc-800f3.appspot.com/o/productos%2FFoco%2040W.png?alt=media&token=7d697c88-6471-4705-829e-eaf51f319540"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/kiev-ingenieria-ecommerc-800f3.appspot.com/o/productos%2FPolea.png?alt=media&token=060a953a-f847-4fe8-8514-a71fd4a44449"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/kiev-ingenieria-ecommerc-800f3.appspot.com/o/productos%2FH5%2FH5-1.webp?alt=media&token=ab9e3999-b8de-42c2-8c18-e89d40678f5b"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/kiev-ingenieria-ecommerc-800f3.appspot.com/o/productos%2FA360%2FA360-2.webp?alt=media&token=bdb72d4f-06be-4af2-af3d-f83c6d4e18dd"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="lg:px-8 xl:-mt-8 mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 pb-20">
          <div className="lg:mx-0 lg:max-w-none mx-auto max-w-2xl">
            <div className="lg:flex-row mt-6 flex flex-col gap-x-8 gap-y-20">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-gray-600">
                  Nuestra empresa fue fundada con la visión de crear
                  herramientas de cultivo que maximicen la eficiencia y
                  productividad. Nos especializamos en el desarrollo y
                  fabricación de equipos esenciales para el cultivo indoor,
                  asegurando que cada producto cumpla con los más altos
                  estándares de calidad y rendimiento.
                </p>
                <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                  <p>
                    Nos esforzamos por ofrecer productos que no solo sean
                    funcionales, sino también accesibles y fáciles de usar.
                    Creemos que un buen cultivo comienza con las herramientas
                    adecuadas, y nos comprometemos a apoyarte en cada paso del
                    proceso.
                  </p>
                  <p className="mt-10">
                    En Kiev Ingeniería, nos enorgullece ser parte de tu aventura
                    en el cultivo indoor. Estamos aquí para brindarte el soporte
                    y asesoramiento que necesitas para alcanzar el éxito en cada
                    cosecha. Explora nuestras soluciones y lleva tu cultivo al
                    siguiente nivel.
                  </p>
                </div>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="xl:w-80 w-64 space-y-8">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col-reverse gap-y-4"
                    >
                      <dt className="text-base leading-7 text-gray-600">
                        {stat.label}
                      </dt>
                      <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <section className="lg:px-8 mx-auto">
      <div className="relative overflow-hidden">
        <div aria-hidden="true" className="overflow absolute inset-0">
        <video
                src="https://videos.pexels.com/video-files/7667132/7667132-uhd_2560_1440_30fps.mp4"
                className="h-full w-full object-cover object-center"
                poster="https://videos.pexels.com/video-files/7667132/7667132-uhd_2560_1440_30fps.mp4"
                autoPlay
                loop
                muted
              />
        </div>
        <div className="lg:px-16 relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
           
            
          </div>
        </div>
      </div>
    </section>

      
      </main>
    </div>
  );
}
