const LocationSection = () => {
  return (
    
    <section className="bg-gray-100">
       <div className="flex flex-col md:flex-row items-center justify-center py-10 px-5 bg-white">
      {/* Contact Information */}
      <div className="text-left md:w-1/2 mb-6 md:mb-0 md:pr-10">
        <h2 className="text-2xl font-bold mb-4">Contacto con kiev ingenieria</h2>
        <p className="text-gray-700 mb-4">
          Para consultas sobre nuestros artefactos para cultivos, por favor complete el formulario a continuación. Nos pondremos en contacto con usted a la brevedad.
        </p>
        <div className="text-lg font-bold mb-2">Argentina</div>
        <div className="mb-4">123456789</div>
        <div className="text-lg font-bold mb-2">Formulario</div>
        <div className="mb-4">info@kievingenieria.com</div>
      </div>

      {/* Contact Form */}
      <div className="md:w-1/2 w-full">
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700" htmlFor="name">
              Nombre del cliente
            </label>
            <input
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              type="text"
              id="name"
              placeholder="Ingrese su nombre aquí"
            />
          </div>
          <div>
            <label className="block text-gray-700" htmlFor="email">
              Correo electrónico*
            </label>
            <input
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              type="email"
              id="email"
              placeholder="Ingrese su correo electrónico"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700" htmlFor="message">
              Mensaje*
            </label>
            <textarea
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              id="message"
              rows="4"
              placeholder="Escriba su mensaje aquí"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Visit Our Location</h2>
          <p className="mt-4 text-lg text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                width="100%"
                height="480"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div>
              <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                  <p className="mt-1 text-gray-600">123 Main St, San Francisco, CA 94105</p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                  <p className="mt-1 text-gray-600">Monday - Friday: 9am - 5pm</p>
                  <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                  <p className="mt-1 text-gray-600">Sunday: Closed</p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                  <p className="mt-1 text-gray-600">Email: info@example.com</p>
                  <p className="mt-1 text-gray-600">Phone: +1 23494 34993</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
