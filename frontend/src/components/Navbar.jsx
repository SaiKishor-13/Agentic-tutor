import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className=" px-6 py-3 flex items-center justify-between">
        {/* Left: Logo & Title */}
        <div className="flex items-center space-x-3">
          <img
            src="/logo.png" // place your logo in public folder
            alt="Bhoshini Logo"
            className="w-10 h-10"
          />
          <h1 className="text-xl font-bold text-gray-900">
            Bhoshini
          </h1>
        </div>

        {/* Right: Menu Items */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <a href="/" className="hover:text-black">
            Home
          </a>
          <a href="/learn" className="hover:text-black">
            Learn
          </a>
          <a href="/progress" className="hover:text-black">
            Progress
          </a>
          <a href="/profile" className="hover:text-black">
            Profile
          </a>
          <a
            href="/signin"
            className="px-4 py-1 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Sign In
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
