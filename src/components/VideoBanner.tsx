import { theme } from "@/theme";
import "aos/dist/aos.css";
import { HashLink } from "react-router-hash-link";
import Video from "@/assets/cannabis-plant-indoor-2-compressed.mp4";
import SkeletonPicture from "@/assets/cannabis-plant-indoor-2-skeleton.webp";

type Props = {
  title: string;
  description?: string;
  topDescription?: string;
  textButton?: string;
  redirection?: string;
  logoSrc?: string;
};

const Banner = ({
  title,
  description,
  topDescription,
  textButton,
  redirection,
  logoSrc,
}: Props) => {

  return (
    <section className="lg:px-8 mx-auto">
      <div className="relative h-screen w-full overflow-hidden">
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
        <div data-aos="fade-up">
          <div className="lg:px-16 relative flex h-screen w-full justify-center bg-gray-900 bg-opacity-40 px-6 sm:px-12">
            <div className="relative mx-auto mt-40 flex max-w-3xl flex-col items-center text-center">
              {logoSrc && (
                <img
                  className="mx-auto mb-10 mt-10 h-16 w-auto invert filter"
                  src={logoSrc}
                  alt="KIEV Ingeniería"
                />
              )}
              {topDescription && (
                <p className="mb-2 mt-3 font-thin text-white">
                  {topDescription}
                </p>
              )}
              <h2
                id="social-impact-heading"
                className="text-4xl tracking-tight text-white sm:text-7xl"
              >
                <span className="block sm:inline">{title}</span>
              </h2>
              {description && (
                <p className="mt-3 font-thin text-white">{description}</p>
              )}
              {textButton && redirection && (
                <HashLink
                  smooth
                  to={redirection}
                  className={`z-5 mt-8 block rounded-full border border-transparent border-white
                             px-8 py-3 text-base font-medium text-[#FFFFFF] transition-transform 
                              duration-200 ease-in-out hover:scale-90 sm:w-auto ${
                                theme.blurHomeButtonsEffect
                                  ? "bg-opacity-10 backdrop-blur-md backdrop-filter"
                                  : "bg-accent"
                              }`}
                >
                  <p>{textButton}</p>
                </HashLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
