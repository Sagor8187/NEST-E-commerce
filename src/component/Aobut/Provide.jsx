import React from "react";

function Provide() {
  const data = [
    {
      image: "https://i.ibb.co.com/7dg94hm5/icon-1.png",
      title: "Best Prices & Offers",
      describe:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    },
    {
      image: "https://i.ibb.co.com/0y8WBmQD/icon-2.png",
      title: "Wide Assortment",
      describe:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    },
    {
      image: "https://i.ibb.co.com/R4Y9zJqW/icon-3.png",
      title: "Free Delivery",
      describe:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    },
    {
      image: "https://i.ibb.co.com/PvGPSSnf/icon-4.png",
      title: "Easy Returns",
      describe:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    },
    {
      image: "https://i.ibb.co.com/G4YSqsp3/icon-5.png",
      title: "100% Satisfaction",
      describe:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    },
    {
      image: "https://i.ibb.co.com/QvrsjJ0G/icon-6.png",
      title: "Great Daily Deal",
      describe:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    },
  ];

  return (
    <>
        <h1 className="text-center font-bold text-xl md:text-3xl lg:text-4xl">What We Provide?</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            
        {data.map((item, index) => (
            <div
            key={index}
            className="shadow-md rounded-2xl p-6 text-center  hover:shadow-xl transition"
            >
            <img
                src={item.image}
                alt={item.title}
                className="h-20 mx-auto mb-4"
            />

            <h2 className="text-xl font-bold text-gray-800 mb-3">
                {item.title}
            </h2>

            <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                {item.describe}
            </p>

            <button className="text-green-600 font-medium hover:underline">
                Read more
            </button>
            </div>
        ))}
        </div>
        
    </>
  
  );
}

export default Provide;
