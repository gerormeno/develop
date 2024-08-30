import { HashLink } from "react-router-hash-link";
import GenericProductImage from "@/assets/adminPanel/picture-not-available.jpg";

type Props = {
  name: string;
  category: string;
  picture: string;
  price: number;
  id: string;
};

const ProductCard = ({ name, category, picture, price, id }: Props) => {
  return (
    <div className="relative w-52 p-5 sm:w-80">
      <HashLink smooth to={`/products/${id}#top`}>
        <img
          src={picture ? picture : GenericProductImage}
          alt="Product"
          className="h-56 w-40 transform rounded-2xl object-cover object-center sm:h-96 sm:w-96"
        />
      </HashLink>
      <div className="px-3">
        <div className="flex items-center justify-between sm:pb-2 pt-3">
          <p className="block truncate text-left text-xl capitalize text-white">
            <strong>{name}</strong>
          </p>

          <p className="cursor-auto text-lg text-white">
            $ {price.toLocaleString("es-ES")}
          </p>
        </div>
        <div className="flex items-center">
          <p className="text-base font-thin text-gray-300">{category} </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
