import React from 'react'
import { FaArrowRight } from "react-icons/fa";
function Covers() {

    let cover = [
        {id : 1,image : "https://i.ibb.co/tMGK8Yvp/alt.png",describe :"Everyday Fresh &Clean with Our Products"},
        {id : 2,image :"https://i.ibb.co/GvcWpWNC/alt-2.png" ,describe :"Make your BreakfastHealthy and Easy"},
        {id : 3 ,image :"https://i.ibb.co/Q7xr8T0b/alt-3.png",describe :"The best OrganicProducts Online"}
    ];

  return (
    <>
        <section>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4 m-2 lg:m-5'>
  {cover.map((item) => (
    <div key={item.id} className='relative w-full md:w-1/3'>
      
      {/* Overlay */}
      <div className='absolute inset-0 flex flex-col justify-center items-start p-1 md:p-1 lg:p-1'>
        <p className='text-lg md:text-xl lg:text-2xl font-semibold mb-2 text-black'>
          {item.describe}
        </p>
        <button className='flex items-center gap-2 px-4 py-2 bg-[#3BB77E] text-white rounded-md hover:bg-green-600 transition'>
          Shop Now <FaArrowRight />
        </button>
      </div>

      {/* Image */}
      <img
        src={item.image}
        alt={`cover-${item.id}`}
        className='w-full h-auto rounded-lg object-cover'
      />
    </div>
  ))}
</div>

        </section>
    </>
  )
}

export default Covers;
