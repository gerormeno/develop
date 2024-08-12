import Person1 from "@/assets/testimonials/person1.webp";
import Person2 from "@/assets/testimonials/person2.webp";
import Person3 from "@/assets/testimonials/person6.webp";
import { testimonialType } from "@/types/testimonial.type";

export const testimonials: Array<testimonialType> = [
  {
    id: 1,
    name: "Maria Smantha",
    image: Person1,
    title: "Web Developer",
    description:
      "The Ordinary's serum foundation is my new favorite. It offers perfect coverage and a semi-matte finish that I love. Plus, its formula without harsh chemicals is ideal for my sensitive skin. I'm completely in love with this product!",
  },
  {
    id: 2,
    name: "Lisa Cudrow",
    image: Person2,
    title: "Graphic Designer",
    description:
      "This moisturizing serum is simply wonderful. It has a lightweight texture that absorbs quickly and leaves my skin hydrated and refreshed. Plus, its formula with hyaluronic acid is perfect for tackling signs of aging. I totally recommend it!",
  },
  {
    id: 3,
    name: "John Smith",
    image: Person3,
    title: "Marketing Specialist",
    description:
      "The Ordinary's serum foundation is my new favorite. It offers perfect coverage and a semi-matte finish that I love. Plus, its formula without harsh chemicals is ideal for my sensitive skin. I'm completely in love with this product!",
  }
];
