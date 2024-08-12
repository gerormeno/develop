import { testimonialType } from "@/types/testimonial.type";
import Testimonial from "./Testimonial";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  return (
    <section id="testimonials" className="mb-16 mt-16 mx-auto w-5/6">
      <div className="md:my-20 md:w-4/5">
        <h1 className="pb-4 text-3xl font-bold tracking-tight text-text-title sm:text-4xl">
          Testimonials
        </h1>
        <p className="mt-3 text-xl text-white tracking-tight">
          Here's what some of our satisfied customers have to say about our products:
        </p>
      </div>
      <div className="mt-16 items-center justify-between gap-20 text-center md:flex">
        {testimonials.map((testimonial: testimonialType) => (
          <Testimonial
            name={testimonial.name}
            image={testimonial.image}
            title={testimonial.title}
            description={testimonial.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
