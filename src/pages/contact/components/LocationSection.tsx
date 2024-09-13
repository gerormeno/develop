import React from "react";

const LocationSection: React.FC = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-start items-center justify-between p-8 md:flex-row md:space-x-8">
      <div className="md:w-1/2" data-aos="fade-right">
        <h2 className="mb-4 text-4xl font-thin text-gray-900">
          Te estamos esperando...
        </h2>
        <p className="mb-4 text-lg">
          Podés visitarnos en nuestras oficinas en pleno centro de Córdoba. <br />
          ¡Vení a conocernos y descubrir nuestros productos!
        </p>
        <div className="mb-4">
          <h3 className="text-xl text-gray-900">Dirección</h3>
          <p>Av. Colón 168</p>
        </div>
        <div>
          <h3 className="text-xl text-gray-900">Horario</h3>
          <p>Lunes a viernes de 9 a 18hs</p>
        </div>
      </div>
      <div className="mt-8 md:mt-0 md:w-1/2" data-aos="fade-up">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13620.17996444208!2d-64.2036095601608!3d-31.412886478075297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2829c01190d%3A0xb3dbb12bee9d3a8f!2sAv.%20Col%C3%B3n%20168%2C%20X5022%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1725210147993!5m2!1ses!2sar"
          className="h-64 w-full md:h-96 md:w-full"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default LocationSection;
