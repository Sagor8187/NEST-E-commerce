import React from "react";

function Heroabout() {
  return (
    <section className="px-6 py-12 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row items-stretch gap-10">

        {/* Left Image */}
        <aside className="h-full">
          <img
            className="h-full w-60 md:w-72 lg:w-80 object-cover rounded-xl"
            src="https://i.ibb.co.com/Z6dbQX6y/about-left.png"
            alt="About Banner"
          />
        </aside>

        {/* Right Text Content */}
        <aside className="max-w-2xl flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Welcome to Nest
            </h1>

            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <p className="text-gray-700 mb-6">
              Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta
              et ut placerat legendos interpre. Donec vitae sapien ut libero
              venenatis faucibus.
            </p>
          </div>

          {/* Gallery Images */}
          <div className="flex gap-3 mt-auto">
            <img
              className="rounded-xl w-28 md:w-40 h-43 object-cover"
              src="https://i.ibb.co.com/q3mPDtJf/about-1.png"
              alt="About 1"
            />
            <img
              className="rounded-xl w-28 md:w-40 h-43 object-cover"
              src="https://i.ibb.co.com/Fbr5Yfx9/about-2.png"
              alt="About 2"
            />
            <img
              className="rounded-xl w-28 md:w-40 h-43 object-cover"
              src="https://i.ibb.co.com/14qHN7Z/about-3.png"
              alt="About 3"
            />
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Heroabout;
