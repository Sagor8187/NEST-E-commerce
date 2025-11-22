import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";

function Navbars() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/*  Navbar Header */}
      <nav className="flex justify-between items-center p-3 px-6 bg-white shadow-md sticky top-0 z-50">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <img src="https://i.ibb.co/qMw9sCnv/logo.png" alt="logo" className="h-12" />
          <div>
            <h2 className="text-green-600 text-2xl font-bold leading-none">Nest</h2>
            <p className="text-sm text-gray-600">MART & GROCERY</p>
          </div>
          <div className="hidden md:flex justify-center gap-1 items-center pl-5">
            <img src="https://i.ibb.co.com/dJkh3rpD/SVG.png" alt="hot" className="h-6" />
            <p>Hot Deals</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-5 text-gray-700 font-medium">
          <li><NavLink  to="/" className={({ isActive }) => isActive ? "text-green-500" : "hover:text-black"}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-green-500" : "hover:text-black"}>About</NavLink></li>
          <li><a href="#" className="hover:text-green-600">Shop</a></li>
          <li><NavLink to="/megamenu" className={({ isActive }) => isActive ? "text-green-500" : "hover:text-black"}>Mega Menu</NavLink></li>
          
          <li><a href="#" className="hover:text-green-600">Blog</a></li>
          <li><a href="#" className="hover:text-green-600">Page</a></li>
          <li><a href="#" className="hover:text-green-600">Contact</a></li>
        </ul>

        {/* Desktop Login Button */}
        <div className="hidden md:block">
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
            Login
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-3xl text-green-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/*  Mobile Dropdown Menu (Animated) */}
      <div
        className={`md:hidden overflow-hidden bg-white shadow-lg transition-all duration-500 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-3 text-gray-800 font-medium p-4">
          <li><NavLink  to="/" className={({ isActive }) => isActive ? "text-green-500" : "hover:text-black"}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-green-500" : "hover:text-black"}>About</NavLink></li>
          <li><a href="#" className="hover:text-green-600">Shop</a></li>
          <li><NavLink to="/megamenu" className={({ isActive }) => isActive ? "text-green-500" : "hover:text-black"}>Mega Menu</NavLink></li>
          <li><a href="#" className="hover:text-green-600">Blog</a></li>
          <li><a href="#" className="hover:text-green-600">Page</a></li>
          <li><a href="#" className="hover:text-green-600">Contact</a></li>
        </ul>
        <button className="mt-2 mb-4 w-[90%] mx-auto block bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
          Login
        </button>
      </div>
    </>
  );
}

export default Navbars;
