import React, { useState, useRef, useEffect } from "react";

const cards = [
  { id: 1, image: "https://i.ibb.co.com/fGxFKBV3/Figure-7.png", title: "Cake & Milk" ,count :"11 items" },
  { id: 2, image: "https://i.ibb.co.com/5Xf8sy5j/Figure-8.png", title: "Oganic Kiwi",count :"6 items" },
  { id: 3, image: "https://i.ibb.co.com/cK5fbBKr/Figure-6.png", title: "Peach",count :"6 items" },
  { id: 4, image: "https://i.ibb.co.com/Wvh58ckH/Figure-10.png", title: "Read Apple",count :"10 items" },
  { id: 5, image: "https://i.ibb.co.com/NdR98Q6Y/Figure-1.png", title: "Snacks",count :"11 items" },
  { id: 6, image: "https://i.ibb.co.com/xtGntRzd/Figure-2.png", title: "Vegetables",count :"6 items" },
  { id: 7, image: "https://i.ibb.co.com/DDRZ1KM0/Figure-3.png", title: "Strawberry" ,count :"10 items"},
  { id: 8, image: "https://i.ibb.co.com/LhnVvyRp/Figure-5.png", title: "Black plum",count :"10 items" },
  { id: 9, image: "https://i.ibb.co.com/tTKJftg5/Figure-9.png", title: "Custard apple" ,count :"10 items"},
  { id: 10,image: "https://i.ibb.co.com/0j01KL6r/Figure-4.png", title: "Coffe & Tea",count :"11 items" },
];

function MiniCardSlider() {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);

  // Clone for seamless infinite scroll
  const slides = [...cards, ...cards];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex >= cards.length) {
      setCurrentIndex(0);
      sliderRef.current.style.transition = "none";
      sliderRef.current.style.transform = `translateX(0px)`;
    } else if (currentIndex < 0) {
      setCurrentIndex(cards.length - 1);
      sliderRef.current.style.transition = "none";
      sliderRef.current.style.transform = `translateX(-${(cards.length - 1) * 160}px)`; // card width + margin
    }
  };

  useEffect(() => {
    sliderRef.current.style.transition = "transform 0.5s ease";
    sliderRef.current.style.transform = `translateX(-${currentIndex * 160}px)`; 
  }, [currentIndex]);

  return (
    <div className="relative max-w-6xl mx-auto mt-10 overflow-hidden">
      <div className="flex" ref={sliderRef} onTransitionEnd={handleTransitionEnd}>
        {slides.map((card, idx) => (
          <div
            key={idx}
            className="w-[150px] h-[200px] bg-white shadow-md rounded-lg mx-1 flex-shrink-0 flex flex-col items-center m-2"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-28 object-cover rounded-t-lg"
            />
            <h3 className="text-sm font-medium mt-2">{card.title}</h3>
            <p className="text-gray-500 ">{card.count}</p>
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-700 transition"
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-700 transition"
      >
        &#10095;
      </button>
    </div>
  );
}

export default MiniCardSlider;
