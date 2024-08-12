import { useDispatch, useSelector } from "react-redux";
import { toggleStatusTab } from "@/store/cart";
import { useEffect, useState } from "react";
import ShoppingCartIcon from '@/assets/navbar/ShoppingCartIcon.svg';

interface Product {
  productId: number;
  quantity: number;
}

interface Cart {
  items: Product[];
  statusTab: boolean;
}

interface Store {
  cart: Cart;
}

const CartButton = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((state: Store) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    if (carts) {
      carts.forEach((item) => {
        total += item.quantity;
      });
    }
    setTotalQuantity(total);
  }, [carts]);

  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <div className="lg:ml-8 ml-4 flow-root" onClick={handleOpenTabCart}>
      <div className="group -m-2 flex items-center p-2 text-navbar-text hover:text-navbar-text-hover">
        <img
          src={ShoppingCartIcon}
          className="h-6 w-6 flex-shrink-0"
          aria-hidden="true"
          alt="Shopping Cart"
          style={{ filter: "brightness(0) saturate(100%)" }}
        />
        <span className="ml-2 text-lg font-medium text-navbar-text">
          {totalQuantity}
        </span>
        <span className="sr-only">items in cart, view bag</span>
      </div>
    </div>
  );
};

export default CartButton;
