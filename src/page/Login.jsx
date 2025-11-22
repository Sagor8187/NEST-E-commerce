import React from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl flex max-w-4xl w-full overflow-hidden">
        {/* Left side - Image */}
        <div className="w-1/2 hidden md:block">
          <img
            src="https://i.ibb.co.com/YTNDsjb4/205.png"
            alt="Login"
            className=" h-40 mt-30 p-5  "
          />
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome Back!</h2>
          <p className="text-gray-600 mb-8">Please login to your account</p>

          <form className="space-y-6">
            {/* Username */}
            <div className="relative">
              <FaUserAlt className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Username"
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </form>

          <p className="text-gray-500 mt-6 text-center">
            Don't have an account?{" "}
            <span className="text-blue-500 font-semibold cursor-pointer hover:underline">
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
