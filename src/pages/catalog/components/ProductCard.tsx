import { HashLink } from "react-router-hash-link";

type Props = {
  name: string;
  picture: string;
  price: number;
  id: string;
};

const ProductCard = ({ name, picture, price, id }: Props) => {
  return (
    <div className="mx-5 w-60 duration-500">
      <HashLink smooth to={`/products/${id}#top`}>
          <img
            src={picture}
            alt="Product"
            className="h-80 w-72 transform object-cover object-center transition-transform duration-500 hover:scale-110"
          />
        
      </HashLink>

      <div className="mb-3 py-3">
        <p className="block truncate text-xl capitalize text-text-primary">
          {name}
        </p>
        <div className="flex items-center">
          <p className="cursor-auto text-base font-thin text-text-primary">
            {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
