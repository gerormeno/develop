import { aboutUsItems } from "@/data/aboutUs";

const AboutItems = () => {
  return (
    <section
      className="lg:max-w-7xl lg:px-8 relative mx-auto mb-16 mt-16 max-w-lg px-6 sm:max-w-4xl"
      aria-labelledby="about-heading"
    >
      <div>
        <h2 className="border-b border-slate-200 pb-4 text-3xl font-bold tracking-tight text-text-title sm:text-4xl">
          About Us
        </h2>
      </div>
      <div className="mt-10 columns-1 gap-8 md:columns-2">
        {aboutUsItems.map((item, index) => (
          <div
            key={item.title}
            className={`mb-8 flex flex-col rounded-3xl 
              border-2 border-background-secondary bg-background-secondary p-4 pb-8 
              transition-colors hover:border-background-secondary-hover hover:bg-background-secondary-hover 
              ${index % 2 === 1 ? "md:col-start-2" : ""}`}
          >
            <dt className="text-xl font-medium text-text-secondary">
              {item.title}
            </dt>
            <dd className="text-md mt-2 max-w-3xl flex-1 text-text-primary">
              {item.title === "Our Values" ? (
                <ul>
                  {item.text.split("-").map((value, index) => (
                    <li key={index}>{`- ${value.trim()}`}</li>
                  ))}
                </ul>
              ) : (
                item.text
              )}
            </dd>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutItems;
