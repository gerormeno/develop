import HumidificadorPicture from "@/assets/products/H5-1.webp";
import FocoPicture from "@/assets/products/Foco 40W.png";
import A200Picture from "@/assets/products/A200-foto-2.webp";
import A360Picture from "@/assets/products/A360-2.webp";
import PoleaPicture from "@/assets/products/Polea.png";

export default function AboutUsSection() {
  return (
    <div className="pt-20 bg-white">
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
            <div className="lg:px-8 mx-auto max-w-7xl px-6 pt-20">
              <div className="lg:mx-0 lg:flex lg:max-w-none lg:items-center mx-auto max-w-2xl gap-x-14">
                <div className="lg:shrink-0 xl:max-w-2xl w-full max-w-xl" data-aos="zoom-in-right">
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
                    <div className="relative" data-aos="zoom-in-right">
                      <img
                        src={A200Picture}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="lg:pt-36 mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52">
                    <div className="relative" data-aos="zoom-in-up">
                      <img
                        src={FocoPicture}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative" data-aos="zoom-in-up">
                      <img
                        src={PoleaPicture}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative" data-aos="zoom-in-left">
                      <img
                        src={HumidificadorPicture}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative" data-aos="zoom-in-left">
                      <img
                        src={A360Picture}
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
      </main>
    </div>
  );
}
