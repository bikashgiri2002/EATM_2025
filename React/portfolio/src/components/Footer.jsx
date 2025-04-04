// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 w-full text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-semibold">YourCompany</h2>
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
