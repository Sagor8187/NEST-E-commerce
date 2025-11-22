import React from "react";

function Blogdetails({ blog, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    // Backdrop with blur and fade-in animation
    <div className="fixed inset-0  bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 animate-fadeIn">
      <div className="bg-white p-6 rounded-lg w-96 relative shadow-lg transform transition-all duration-1000 scale-90 animate-scaleUp">
        {/* Image */}
        <img src={blog.image} alt={blog.title} className="rounded-md mb-4" />

        {/* Title */}
        <h2 className="text-xl font-bold mb-2">{blog.title}</h2>

        {/* Details */}
        <p className="mb-4">{blog.details}</p>

        {/* Close Button */}
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Blogdetails;
