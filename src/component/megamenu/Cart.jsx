function Cart({ cart, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="p-4 bg-gray-100 mt-6 rounded-xl">
      <h2 className="text-xl font-bold mb-3">Your Cart</h2>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item, index) => (
        <div key={index} className="flex justify-between bg-white p-3 rounded-lg mb-2 shadow">
          <div>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">${item.price} x {item.quantity}</p>
            <p className="font-bold text-green-700">Total: ${item.totalPrice.toFixed(2)}</p>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => onDecrease(item.title)} className="px-2 shadow hover:bg-red-500 rounded">-</button>
            <span>{item.quantity}</span>
            <button onClick={() => onIncrease(item.title)} className="px-2 shadow hover:bg-green-500 rounded">+</button>

            <button
              onClick={() => onRemove(item.title)}
              className="px-2 py-1 bg-red-600 text-white rounded">
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
