import { theme } from "@/theme";
import { HashLink } from "react-router-hash-link";

type Props = {
  title: string;
  description?: string;
  textButton?: string;
  redirection?: string;
  imgSrc: string;
};

const Banner = ({
  title,
  description,
  textButton,
  redirection,
  imgSrc,
}: Props) => {
  return (
    <section className="lg:px-8 mx-auto">
      <div className="relative overflow-hidden rounded-lg">
        <div aria-hidden="true" className="overflow absolute inset-0">
          <img
            className="h-full w-full object-cover object-center"
            src={imgSrc}
            alt=""
          />
        </div>
        <div className="lg:px-16 relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2
              id="social-impact-heading"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              <span className="block sm:inline">{title}</span>
            </h2>
            {description && <p className="mt-3 text-xl text-white">{description}</p>}
            {textButton && redirection && (
              <HashLink
                smooth
                to={redirection}
                className={`z-5 mt-8 block w-full rounded-md border border-transparent border-white
                             px-8 py-3 text-base font-medium text-text-primary transition-transform 
                              duration-200 ease-in-out hover:scale-90 sm:w-auto ${
                                theme.blurHomeButtonsEffect
                                  ? "bg-opacity-10 backdrop-blur-md backdrop-filter"
                                  : "bg-accent"
                              }`}
              >
                <p className="text-text-primary">{textButton}</p>
              </HashLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
