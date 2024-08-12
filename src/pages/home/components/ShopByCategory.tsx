import { HashLink } from "react-router-hash-link";
import { categories } from "../categories";
import { useDispatch } from "react-redux";
import { setSingleFilter } from "@/store/filters";

const ShopByCategory = () => {
  const dispatch = useDispatch();

  return (
    <section
      className="lg:px-8 mx-auto max-w-full py-16"
      aria-labelledby="category-heading"
    >
      <div className="lg:px-8 xl:px-0 items-baseline px-4 sm:flex sm:justify-between sm:px-6">
        <h1 className="pb-4 text-3xl font-bold tracking-tight text-text-title sm:text-4xl">
          Shop by category
        </h1>
        <a
          href="/products"
          className="lg:text-6xl z-10 hidden align-bottom text-4xl text-lg font-bold font-semibold 
              tracking-tight text-text-secondary hover:text-text-secondary-hover sm:block"
        >
          Browse all categories
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="mt-4 flow-root">
        <div className="xl:overflow-visible h-100 relative box-content flex items-center justify-center overflow-x-auto py-2">
          <div className="lg:px-8 xl:relative xl:grid xl:grid-cols-4 xl:gap-x-8 xl:space-x-0 xl:px-0 m-0 flex w-full space-x-8 px-4 sm:px-6">
            {categories.map((category) => (
              <HashLink
                key={category.name}
                smooth
                to={category.href}
                className="xl:w-auto relative flex h-0 w-full flex-col overflow-hidden rounded-lg p-6 hover:opacity-75"
                style={{ paddingBottom: "35%" }}
                onClick={() => {
                  dispatch(setSingleFilter(category.name));
                }}
              >
                <span aria-hidden="true" className="absolute inset-0">
                  <img
                    src={category.imageSrc}
                    alt=""
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                </span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                />
                <span
                  className="relative mt-auto text-center font-bold text-white"
                  style={{ fontSize: "2vw" }}
                >
                  {category.name}
                </span>
              </HashLink>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 px-4 sm:hidden">
        <a
          href="/products"
          className="block text-lg font-semibold text-text-secondary hover:text-text-secondary-hover"
        >
          Browse all categories
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </section>
  );
};

export default ShopByCategory;
