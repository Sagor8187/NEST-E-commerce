import React from 'react'

function Herosection() {
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

  const filtercategory = (items,type) =>{
    return items.filter(item => item.type === type)
  }
  const fresh = filtercategory(item,"Fresh Fruit")
  console.log (fresh)
  return (
    <div className='ml-5 mr-5'>
        <h1 className='font-bold text-xl md:text-3xl lg:text-4xl mt-5 mb-5 '>Popular Products</h1>
        <div>

        </div>
    </div>
  )
}

export default Herosection