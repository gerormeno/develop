import { useEffect } from "react";
import AboutUsSection from "./components/AboutSection";
import Picture from "@/assets/high-angle-arrangement-with-colorful-lights.jpg";
import Aos from "aos";

const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  
  return (
    <div className="bg-background-primary">
      <AboutUsSection />
      {/* <TextSection /> */}
      <div className="relative mx-auto flex flex-col justify-center pt-14 sm:flex-row max-w-7xl">
        <div className="flex items-center justify-center p-6" data-aos="zoom-in-right">
          <p className="text-center text-lg leading-8 text-gray-600">
            Nuestra empresa fue fundada con la visión de crear herramientas de
            cultivo que maximicen la eficiencia y productividad. Nos
            especializamos en el desarrollo y fabricación de equipos esenciales
            para el cultivo indoor, asegurando que cada producto cumpla con los
            más altos estándares de calidad y rendimiento.
          </p>
        </div>
        <div className="p-6" data-aos="zoom-in-up">
          <img
            src={Picture}
            alt="imagen de prueba"
            className="rounded-3xl object-cover shadow-2xl"
            style={{ height: 300, width: 1500 }}
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl py-10 sm:px-12">
        <div className="m-10" data-aos="zoom-in-up">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Acerca de KIEV Ingeniería
          </h2>
        </div>
        <div className="relative mx-auto mb-10 flex flex-col justify-center px-6 sm:flex-row">
          <div className="p-6" data-aos="zoom-in-right">
            <h3 className="text-center text-xl font-bold text-gray-900 sm:text-left">
              Misión de Kiev Ingenieria
            </h3>
            <p className="mt-2 text-center text-lg leading-8 text-gray-600 sm:text-left">
              Nos esforzamos por ofrecer productos que no solo sean funcionales,
              sino también accesibles y fáciles de usar. Creemos que un buen
              cultivo comienza con las herramientas adecuadas, y nos
              comprometemos a apoyarte en cada paso del proceso.
            </p>
          </div>
          <div className="p-6" data-aos="zoom-in-up">
            <h3 className="text-center text-xl font-bold text-gray-900 sm:text-left">
              Soluciones innovadoras para cultivo
            </h3>
            <p className="mt-2 text-center text-lg leading-8 text-gray-600 sm:text-left">
              En Kiev Ingeniería, nos enorgullece ser parte de tu aventura en el
              cultivo indoor. Estamos aquí para brindarte el soporte y
              asesoramiento que necesitás para alcanzar el éxito en cada
              cosecha. Explorá nuestras soluciones y llevá tu cultivo al
              siguiente nivel.
            </p>
          </div>
        </div>
        <div className="h-64" data-aos="zoom-in-up">
          <img
            src="https://images.unsplash.com/photo-1591754060004-f91c95f5cf05?auto=format&fit=crop&2880"
            alt="imagen de prueba"
            className="h-full w-full rounded-3xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
