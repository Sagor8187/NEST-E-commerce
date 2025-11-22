import React from "react";
import { FaLocationDot } from "react-icons/fa6";

function ContactHelp() {
  const services = [
    {
      id: "01.",
      title: "Visit Feedback",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      id: "02.",
      title: "Employer Services",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      id: "03.",
      title: "Billing Inquiries",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      highlight: true
    },
    {
      id: "04.",
      title: "General Inquiries",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
  ];

  const officeData = [
    { title: "Office" },
    { title: "Studio" },
    { title: "Shop" },
  ];

  return (
    <div className="w-full px-8 py-20 max-w-7xl mx-auto">
      {/* Top Heading */}
      <p className="text-green-500 text-lg font-medium">How can help you ?</p>
      <h1 className="text-4xl font-bold text-gray-800 leading-snug my-3">
        Let us know how <br /> we can help you
      </h1>

      <p className="text-gray-500 max-w-3xl leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <p className="text-gray-500 max-w-3xl leading-relaxed mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>

      {/* Service Grid */}
      <div className="grid md:grid-cols-2 gap-10 mt-12">
        {services.map((s, index) => (
          <div key={index}>
            <h2
              className={`text-lg font-semibold mb-2 ${
                s.highlight ? "text-green-600" : "text-gray-800"
              }`}
            >
              {s.id} {s.title}
            </h2>
            <p className="text-gray-500 leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>

      {/* Office Section */}
      <div className="grid md:grid-cols-3 gap-10 mt-16">
        {officeData.map((o, index) => (
          <div key={index}>
            <h2 className="text-green-600 font-semibold text-xl mb-3">
              {o.title}
            </h2>

            <p className="text-gray-600">205 North Michigan Avenue, Suite 810</p>
            <p className="text-gray-600">Chicago, 60601, USA</p>
            <p className="text-gray-600 mt-2">
              <span className="font-medium">Phone:</span> (123) 456-7890
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Email:</span> contact@Evara.com
            </p>

            <button className="flex items-center gap-2 bg-green-600 text-white py-2 px-5 rounded-lg mt-5 hover:bg-green-700 transition">
              <FaLocationDot /> View map
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactHelp;
