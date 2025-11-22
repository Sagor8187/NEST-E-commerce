import { useState } from "react";
import Product from "./Product";
import Cart from "./Cart";

function MainsApp() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart(prev => {
      const found = prev.find(item => item.title === product.title);

      if (found) {
        return prev.map(item =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1, totalPrice: (item.quantity + 1) * item.price }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1, totalPrice: product.price }];
    });
  };

  const increase = (title) => {
    setCart(prev =>
      prev.map(item =>
        item.title === title
          ? { ...item, quantity: item.quantity + 1, totalPrice: (item.quantity + 1) * item.price }
          : item
      )
    );
  };

  const decrease = (title) => {
    setCart(prev =>
      prev
        .map(item =>
          item.title === title
            ? { ...item, quantity: Math.max(1, item.quantity - 1), totalPrice: Math.max(1, item.quantity - 1) * item.price }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const removeItem = (title) => {
    setCart(prev => prev.filter(item => item.title !== title));
  };

  return (
    <div>
      <Product onAddToCart={handleAddToCart} />
      <Cart cart={cart} onIncrease={increase} onDecrease={decrease} onRemove={removeItem} />
    </div>
  );
}

export default MainsApp;
