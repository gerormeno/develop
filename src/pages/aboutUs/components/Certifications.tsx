import { certifications } from "@/data/aboutUs";

const Certifications = () => {
  return (
    <section
      className="lg:max-w-7xl lg:px-8 relative mx-auto mt-16 max-w-lg px-6 sm:max-w-4xl"
      aria-labelledby="contact-heading"
      id="certifications"
    >
      <div>
        <h2 className="border-b border-slate-200 pb-4 text-3xl font-bold tracking-tight text-text-title sm:text-4xl">
          Our Certifications
        </h2>
      </div>
      <div className="lg:columns-3 mt-16 columns-1 gap-8 sm:columns-2">
        {certifications.map((certification) => (
          <div
            key={certification.name}
            className="mb-20 flex break-inside-avoid-column flex-col rounded-3xl border-2 border-background-secondary 
              bg-background-secondary transition-colors hover:border-background-secondary-hover hover:bg-background-secondary-hover "
          >
            <div className="relative flex-1 px-6 pb-8 pt-4 md:px-8">
              <div
                className={`absolute top-0 inline-block -translate-y-1/2 transform rounded-full 
                  ${
                    certification.hasTranslucentLogo
                      ? "bg-white"
                      : "bg-background-primary"
                  }`}
              >
                <img
                  className="h-20 w-20"
                  src={certification.logo}
                  alt={`${certification.name} logo`}
                />
              </div>
              <h3 className="mt-10 text-xl font-medium text-text-primary">
                <strong>{certification.name}</strong>
              </h3>
              <div className="mt-4 text-base text-text-primary">
                {certification.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
