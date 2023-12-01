import { createContext, useContext, useEffect, useState } from 'react';

//1) Creer un context
const CartContext = createContext();

const carts = [
  {
    name: 'pomme',
    quantity: 2,
    price: 1.9,
  },
  {
    name: 'banane',
    quantity: 8,
    price: 1.4,
  },
];

export default function CartProvider(props) {
  const [cartUser, setCartUser] = useState(carts);
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    let total = 0;
    for (const item of cartUser) {
      total += item.quantity * item.price;
    }
/*  */
    setTotalCart(total.toFixed(2));
  }, [cartUser]);

  const quantityHandler = function (event, index) {
    const copyCart = [...cartUser];

    copyCart[index].quantity = Number(event.target.value);

    setCartUser(copyCart);
  };

  return (
    <CartContext.Provider
      value={{
        cartUser: cartUser,
        totalCart: totalCart,
        quantityHandler: quantityHandler,
      }}>
      {props.children}
    </CartContext.Provider>
  );
}

export function useCartProvider() {
  const value = useContext(CartContext);
  return value;
}
