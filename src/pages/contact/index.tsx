import { useEffect } from "react";
import LocationSection from "./components/LocationSection";
import Video from "@/assets/cannabis-plant-indoor-2-compressed.mp4";
import { HashLink } from "react-router-hash-link";
import SkeletonPicture from "@/assets/cannabis-plant-indoor-2-skeleton.webp";
import Aos from "aos";
import {
  FacebookLogo,
  InstagramLogo,
  TikTokLogo,
  YoutubeLogo,
  WhatsAppLogo,
} from "@/assets/icons/socialMediaLogos";

const socialMediaLogos = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/KievTecnologia",
    icon: FacebookLogo,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@kievingenieria",
    icon: TikTokLogo,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Kievingenieria",
    icon: YoutubeLogo,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/kievingenieria?igsh=ZWNrYjg1OW85dzl6",
    icon: InstagramLogo,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/5493584407047", 
    icon: WhatsAppLogo,
  },
];

const ContactSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section className="lg:px-8 mx-auto">
        <div className="relative w-full overflow-hidden">
          <div aria-hidden="true" className="overflow absolute inset-0">
            <video
              src={Video}
              className="h-full w-full object-cover object-center"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster={SkeletonPicture}
            />
          </div>
          <div className="lg:px-16 relative flex w-full items-center justify-center bg-gray-900 bg-opacity-40 px-6 py-20 sm:px-12">
            <div className="relative mx-auto flex max-w-3xl flex-col items-center pt-20 text-center md:max-w-7xl md:flex-row md:text-left">
              <div className="mr-0 md:mr-20" data-aos="zoom-in-right">
                <h2
                  id="impacto-social-titulo"
                  className="text-2xl font-medium tracking-tight text-white sm:text-4xl"
                >
                  <span className="block text-center sm:inline md:text-left">
                    ¡Nos encantaría saber más de vos! <br />
                    Ponete en contacto con nosotros:
                  </span>
                </h2>

                <p className="mt-3 max-w-3xl text-center text-lg font-thin tracking-tight text-gray-300 md:text-left">
                  <strong>Teléfono:</strong> 3584 40-7047
                  <br />
                  <strong>Email:</strong> kievtecnologia420@gmail.com
                  <br />
                </p>
                <p className="mt-3 max-w-3xl text-center text-lg tracking-tight text-white md:text-left">
                  <strong>Completá nuestro formulario de contacto</strong> y te
                  responderemos lo antes posible.
                  <br />
                </p>
                <div className="mt-12 flex justify-center space-x-6 pl-0">
                  {socialMediaLogos.map((logo) => (
                    <HashLink
                      key={logo.name}
                      to={logo.href}
                      className="text-slate-400 hover:text-slate-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">{logo.name}</span>
                      <logo.icon
                        className="h-8 w-8 md:h-10 md:w-10"
                        aria-hidden="true"
                      />
                    </HashLink>
                  ))}
                </div>
              </div>
              <div
                className="mt-10 w-full max-w-md rounded-2xl bg-black bg-opacity-40 p-8 backdrop-blur-md backdrop-filter"
                data-aos="zoom-in-left"
              >
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="mb-2 block text-left font-bold text-gray-300"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      placeholder="Ingresá tu nombre"
                      className="w-full rounded-lg border border-gray-300 bg-transparent p-3"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-left font-bold text-gray-300"
                    >
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Ingresá tu correo electrónico"
                      required
                      className="w-full rounded-lg border border-gray-300 bg-transparent p-3"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="mensaje"
                      className="mb-2 block text-left font-bold text-gray-300"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      placeholder="Escribí tu mensaje acá"
                      required
                      className="h-28 w-full resize-none rounded-lg border border-gray-300 bg-transparent p-3"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-white bg-opacity-10 p-3 text-gray-300 backdrop-filter transition-all duration-500 hover:bg-opacity-5"
                  >
                    Enviar mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="lg:px-8 lg:py-12 px-4 py-8 sm:px-6">
        <LocationSection />
      </div>
    </>
  );
};

export default ContactSection;
