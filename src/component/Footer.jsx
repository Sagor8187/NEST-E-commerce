import React from "react";
import { FaPhoneAlt, FaRegClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { FaApple } from "react-icons/fa6";
import { DiAndroid } from "react-icons/di";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white border-t mt-10 py-10 px-6 md:px-12">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">

    {/* Column 1: Logo + Info */}
    <div className="lg:col-span-2">
      <div className="flex items-center mb-4">
        <img
          src="https://i.ibb.co.com/qMw9sCnv/logo.png"
          alt="logo"
          className="w-14"
        />
        <h1 className="font-bold text-4xl text-green-500 ml-2">Nest</h1>
      </div>

      <p className="text-gray-600 mb-5">
        Awesome grocery store website template
      </p>

      <div className="flex items-start gap-3 mb-3 text-gray-600">
        <GoLocation size={20} />
        <p>Address Dhaka Uttara Shop No : 23</p>
      </div>

      <div className="flex items-center gap-3 mb-3 text-gray-600">
        <FaPhoneAlt size={18} />
        <p>
          Call Us <span className="text-green-600">(+880)124553897</span>
        </p>
      </div>

      <div className="flex items-center gap-3 mb-3 text-gray-600">
        <MdEmail size={20} />
        <p>Email sale@Nest.com</p>
      </div>

      <div className="flex items-center gap-3 text-gray-600">
        <FaRegClock size={18} />
        <p>Hours 10:00 AM – 6:00 PM, Mon – Sat</p>
      </div>
    </div>

    {/* Column 2: Company */}
    <div>
      <h3 className="text-xl font-bold mb-4">Company</h3>
      <ul className="space-y-2 text-gray-700">
        <li>About Us</li>
        <li>Delivery Information</li>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
        <li>Contact Us</li>
        <li>Support Center</li>
        <li>Careers</li>
      </ul>
    </div>

    {/* Column 3: Account */}
    <div>
      <h3 className="text-xl font-bold mb-4">Account</h3>
      <ul className="space-y-2 text-gray-700">
        <li>Sign In</li>
        <li>View Cart</li>
        <li>My Wishlist</li>
        <li>Track My Order</li>
        <li>Help Ticket</li>
        <li>Shipping Details</li>
        <li>Compare products</li>
      </ul>
    </div>

    {/* Column 4: Corporate */}
    <div>
      <h3 className="text-xl font-bold mb-4">Corporate</h3>
      <ul className="space-y-2 text-gray-700">
        <li>Become a Vendor</li>
        <li>Affiliate Program</li>
        <li>Farm Business</li>
        <li>Farm Careers</li>
        <li>Our Suppliers</li>
        <li>Accessibility</li>
        <li>Promotions</li>
      </ul>
    </div>

    {/* Install App */}
    <div>
      <h3 className="font-bold text-xl mb-2">Install App</h3>
      <p className="text-gray-600 mb-3">From App Store or Google Play</p>

      <div className="flex gap-4 mb-4">
        <p className="text-5xl"><FaApple /></p>
        <p className="text-5xl"><DiAndroid /></p>
      </div>

      <p className="text-gray-600 mb-2">Secured Payment Gateways</p>

      <div className="flex gap-4">
        <p className="text-5xl"><FaCcVisa /></p>
        <p className="text-5xl"><FaCcMastercard /></p>
      </div>
    </div>

  </div>
</footer>

  );
}

export default Footer;
