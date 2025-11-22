import React from "react";

function ContactForm() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-start">
      
      {/* Left Side Form */}
      <div>
        <p className="text-green-600 text-lg font-semibold">Contact form</p>

        <h1 className="text-4xl font-bold text-gray-800 mt-2">
          Drop Us a Line
        </h1>

        <p className="text-gray-500 mt-3">
          Your email address will not be published. Required fields are marked *
        </p>

        {/* Form Inputs */}
        <form className="mt-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-4 border rounded-xl text-gray-700 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border rounded-xl text-gray-700 outline-none"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Your Phone"
              className="w-full p-4 border rounded-xl text-gray-700 outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 border rounded-xl text-gray-700 outline-none"
            />
          </div>

          <textarea
            rows="6"
            placeholder="Message"
            className="w-full p-4 border rounded-xl text-gray-700 outline-none"
          ></textarea>

          <button className="bg-[#163b47] text-white px-8 py-4 rounded-xl hover:bg-[#0f2c36] transition">
            Send message
          </button>
        </form>
      </div>

      {/* Right Side Image */}
      <div className="flex justify-center">
        <img
          src="https://i.ibb.co.com/QFGDzxpq/460.png"
          alt="Contact "
          className="rounded-3xl   shadow-lg"
        />
      </div>

    </div>
  );
}

export default ContactForm;
