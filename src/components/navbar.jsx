import React from "react";

export default function Navbar() {
  return (
    <nav className=" w-full bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo / Brand */}
      <div className="text-2xl font-bold tracking-wide">MyBrand</div>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li>
          <a href="#" className="hover:text-blue-400 transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-400 transition-colors">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}
