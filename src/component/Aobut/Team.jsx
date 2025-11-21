import React from 'react';
import { FaFacebook, FaTwitter, FaInstagramSquare, FaYoutube } from "react-icons/fa";

function Team() {
  const data = [
    { image: "https://i.ibb.co.com/JRhfL60B/Main.png", name: "H. Merinda", position: "CEO & Co-Founder" },
    { image: "https://i.ibb.co.com/F4DRD1X8/Main-1.png", name: "Dilan Specter", position: "Head Engineer" }
  ];

  return (
    <div className='mx-8 '>
      <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center">
        Our Team
      </h1>

      <section className="flex flex-col lg:flex-row gap-10 mt-6">
        
        {/* Left side texts */}
        <aside className="lg:w-1/2 space-y-4">
          <p className="text-green-600">Our Team</p>

          <h2 className="font-bold text-xl md:text-3xl lg:text-4xl">
            Meet Our Expert Team
          </h2>

          <p className="text-gray-600">
            Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa dolor imperdiet nec consequat congue id sem. 
            Maecenas malesuada faucibus finibus.
          </p>

          <p className="text-gray-600">
            Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa dolor imperdiet nec consequat congue id sem. 
            Maecenas malesuada faucibus finibus.
          </p>

          <button className="bg-green-500 hover:bg-green-600 p-2 rounded-md text-white">
            View All Members
          </button>
        </aside>

        {/* Right side team cards */}
        <aside className="lg:w-1/2">
          <div className="flex flex-col md:flex-row gap-10 justify-center">
            {data.map((item, index) => (
              <div key={index} className="relative w-fit mb-5">

                {/* Image */}
                <section>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="rounded-xl"
                  />
                </section>

                {/* Bottom floating card */}
                <section
                  className="
                    absolute left-1/2 bottom-0
                    -translate-x-1/2 translate-y-1/2
                    bg-white shadow p-3 rounded-xl
                    w-[70%] text-center
                  "
                >
                  <h1 className="font-bold">{item.name}</h1>
                  <p className="text-gray-500">{item.position}</p>

                  <div className="flex gap-3 text-green-500 justify-center mt-2">
                    <FaFacebook />
                    <FaTwitter />
                    <FaInstagramSquare />
                    <FaYoutube />
                  </div>
                </section>

              </div>
            ))}
          </div>
        </aside>

      </section>
    </div>
  );
}

export default Team;
