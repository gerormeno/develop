import { useRef, useState } from "react";
import ContactImage from "@/assets/banners/contact.webp";
import { sendEmail } from "@/services/emailService";
import { theme } from "@/theme";

const ContactUsBanner = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  return (
    <section className="lg:px-8 mx-auto" id="contact">
      <div className="relative overflow-hidden rounded-lg">
        <div aria-hidden="true" className="overflow absolute inset-0">
          <img
            className="h-full w-full object-cover object-center"
            src={ContactImage}
            alt=""
          />
        </div>
        <div className="lg:px-16 relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-32">
          <div className="relative mx-auto flex max-w-3xl flex-col items-start text-start">
            <h2
              id="social-impact-heading"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              <span className="block sm:inline">
                We would love to hear from you! <br />
                Here's how to reach us:
              </span>
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-white">
              <strong>Address:</strong> Natural Beauty S.A. Innovation Street,
              No. 10 28015, Madrid, Spain.
              <br />
              <strong>Phone:</strong> +34 910 00 00 00
              <br />
              <strong>Email:</strong> COMPLETAR@naturalbeauty.com
              <br />
              <strong>Complete our contact form</strong> and we will get back to
              you as soon as possible.
              <br />
              <strong>Follow us</strong> to stay up-to-date with our latest
              products and skincare tips:
              <br />
              Links a Instagram - Facebook - Twitter
              <br />
            </p>
            <div className="lg:ml-8 lg:mt-0 mt-8">
              <form
                className="sm:flex"
                ref={form}
                onSubmit={(e) => {
                  e.preventDefault();
                  sendEmail("template_uytmzki", form, setIsLoading);
                }}
              >
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-md border border-slate-300 px-5 py-3 placeholder-slate-400 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:max-w-xs"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md shadow sm:ml-3 sm:mt-0 sm:flex-shrink-0">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`z-5 block w-full rounded-md border border-transparent border-white
                                  px-8 py-3 text-base font-medium text-gray-900 transition-transform 
                                  duration-200 ease-in-out hover:scale-90 sm:w-auto ${
                                    theme.blurHomeButtonsEffect
                                      ? "bg-opacity-10 backdrop-blur-md backdrop-filter"
                                      : "bg-accent"
                                  } ${
                      isLoading
                        ? "scale-90 cursor-not-allowed bg-gray-400"
                        : "focus:ring-indigo-500 focus:ring-offset-gray-50"
                    }`}
                  >
                    {isLoading ? (
                      <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-400 border-t-blue-600" />
                    ) : (
                      <p className="text-gray-300">Notify me</p>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsBanner;
