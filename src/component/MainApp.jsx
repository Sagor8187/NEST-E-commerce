import  { useState } from "react";
import Itemscard from "./Itemscard";
import Cart from "./Cart";

function MainApp() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart(prevCart => {
      const exists = prevCart.find(item => item.title === product.title);

      if (exists) {
        return prevCart.map(item =>
          item.title === product.title
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: (item.quantity + 1) * item.price
              }
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            ...product,
            quantity: 1,
            totalPrice: product.price,
          }
        ];
      }
    });
  };

  return (
    <div>
      <Itemscard onAddToCart={handleAddToCart} />
      <Cart cart={cart} />
    </div>
  );
}

export default MainApp;
