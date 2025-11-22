import React, { useState } from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";

function Product({ onAddToCart }) {

  const item = [
    { discount: 10, title: "Foster Farms Takeout CrispyClassic", image: "https://i.ibb.co.com/LXf8GyrF/Foster-Farms-Takeout-Crispy-Classic.png", type: "Baking material", menufacture: "Country Crock", price: 17.85, lessprice: 19.80 },
    { discount: 13, title: "Organic Cage Grade A Large Eggs", image: "https://i.ibb.co.com/zTvrWYdv/Organic-Cage-Grade-A-Large-Eggs.png", type: "Baking material", menufacture: "Hambger Hel", price: 21.00, lessprice: 24.00 },
    { discount: 8, title: "Haagen Caramel Cone Ice Cream Boxed", image: "https://i.ibb.co.com/PZkCb1MF/Haagen-Caramel-Cone-Ice-Cream-Boxed.png", type: "Baking material", menufacture: "Hambger Hel", price: 22.25, lessprice: 24.80 },
    { discount: 60, title: "All Natural Style Chicken Meatballs", image: "https://i.ibb.co.com/Lzjy7nTp/All-Natural-Style-Chicken-Meatballs.png", type: "Fresh Seafood", menufacture: "Wonderful", price: 23.00, lessprice: 122.00 },
    { discount: 8, title: "Blue Almonds Lightly Salted Vegetables", image: "https://i.ibb.co.com/Fbg3h4DF/Blue-Almonds-Lightly-Salted-Vegetables.png", type: "Fresh Fruit", menufacture: "Country Crock", price: 23.85, lessprice: 25.80 },
    { discount: 8, title: "Gorton’s Beer Battered Fish Fillets", image: "https://i.ibb.co.com/21hrPfv6/Gorton-s-Beer-Battered-Fish-Fillets.png", type: "Fresh Seafood", menufacture: " Hambger Hel", price: 23.85, lessprice: 25.80 },
    { discount: 13, title: "Seeds of Change Organic Red Rice", image: "https://i.ibb.co.com/YFs6Hzz0/Seeds-of-Change-Organic-Red-Rice.png", type: "Fresh Fruit", menufacture: " NestFood", price: 28.85, lessprice: 32.80 },
    { discount: 3, title: "Canada Dry Ginger Ale – 2 L Bottle", image: "https://i.ibb.co.com/3yvL2YYs/Canada-Dry-Ginger-Ale-2-L-Bottle.png", type: "Baking material", menufacture: "Hambger Hel", price: 32.85, lessprice: 33.80 },
    { discount: 6, title: "Encore Seafoods Stuffed Alaskan", image: "https://i.ibb.co.com/Ngdxp9bf/Encore-Seafoods-Stuffed-Alaskan.png", type: "Clothing & beauty", menufacture: "Hambger Hel", price: 35.85, lessprice: 37.80 },
    { discount: 8, title: "Angie’s Sweet & Salty Kettle Corn", image: "https://i.ibb.co.com/wNXqr107/Angie-s-Sweet-Salty-Kettle-Corn.png", type: "Baking material", menufacture: "Country Crock", price: 48.85, lessprice: 52.80 },
  ];

  const [activeType, setActiveType] = useState("All");

  const categories = ["All", "Baking material", "Fresh Fruit", "Fresh Seafood", "Clothing & beauty"];

  const filteredItems = item.filter(product => {
    if (activeType === "All") return true;
    return product.type === activeType;
  });

  return (
    <div>

      <div className="flex gap-3 px-4 mb-4 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveType(cat)}
            className={`px-4 py-2 rounded-lg ${
              activeType === cat ? "bg-green-600 text-white" : "bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 p-4">

        {filteredItems.map((data, index) => (
          <div key={index}
            className="relative bg-white shadow-lg rounded-2xl p-4 hover:shadow-2xl transition duration-300">

            <p className="absolute top-2 left-2 bg-green-500 text-white px-3 py-1 rounded-br-xl rounded-tl-xl font-semibold text-sm">
              {data.discount}%
            </p>

            <div className="flex justify-center">
              <img className="h-40 object-contain" src={data.image} alt={data.title} />
            </div>

            <p className="text-gray-500 text-sm mt-2">{data.type}</p>

            <h2 className="text-lg font-bold mb-1">{data.title}</h2>

            <p className="text-sm">
              By <span className="text-green-500 font-semibold">{data.menufacture}</span>
            </p>

            <div className="flex justify-between items-center mt-3">
              <div className="flex gap-3">
                <p className="text-green-600 font-bold">${data.price}</p>
                <p className="line-through text-gray-400">${data.lessprice}</p>
              </div>

              <button
                onClick={() => onAddToCart(data)}
                className="flex items-center gap-1 bg-green-100 text-green-600 font-semibold px-3 py-1 rounded-lg hover:bg-green-200 transition">
                <MdOutlineShoppingCart /> Add
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Product;
