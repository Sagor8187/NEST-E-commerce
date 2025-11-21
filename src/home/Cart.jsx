import React from "react";

function Cart({ cart }) {
  return (
    <div className="p-4 bg-gray-100 mt-10 rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 && <p>No items added</p>}

      {cart.map((item, index) => (
        <div key={index} className="bg-white p-3 mb-3 shadow rounded-lg flex justify-between">
          
          <div className="flex gap-3">
            <img src={item.image} className="w-16 h-16 object-contain" />
            <div>
              <h3 className="font-bold">{item.title}</h3>
              <p>Price: ${item.price}</p>
              <p>Qty: {item.quantity}</p>
            </div>
          </div>

          <h3 className="font-bold text-green-600 text-xl"> Total : ${item.price} x {item.quantity} =
            ${item.totalPrice.toFixed(2)}
          </h3>

        </div>
      ))}
    </div>
  );
}

export default Cart;
