import React from "react";

function Perfomence() {
  const data = [
    {
      title: "Who we are",
      describe:
        "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. Ellus eros donec ac odio orci ultrices in.",
    },
    {
      title: "Our history",
      describe:
        "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. Ellus eros donec ac odio orci ultrices in.",
    },
    {
      title: "Our mission",
      describe:
        "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. Ellus eros donec ac odio orci ultrices in.",
    },
  ];

  return (
    <div className="px-8 py-16 max-w-7xl mx-auto">
      {/* Top section with image and text */}
      <section className="flex flex-col lg:flex-row items-center gap-8 mb-16">
        {/* Image Section */}
        <div className="w-full lg:w-2/5 flex justify-center">
          <img
            src="https://i.ibb.co/0jSWGbY0/about-5.png"
            alt="image2"
            className="rounded-lg w-full shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-3/5">
          <p className="text-gray-400 uppercase mb-2">Our performance</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Your Partner for e-commerce grocery solution
          </h1>
          <p className="text-gray-600 mb-2">
            Ed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto.
          </p>
          <p className="text-gray-600">
            Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia.
          </p>
        </div>
      </section>

      {/* Bottom section with cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.describe}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Perfomence;
