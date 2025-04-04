import React from "react";

const Header = () => {
  return (
    <header className="bg-orange-400 w-full">
      <div className="max-w-6xl mx-auto h-[80px] flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold text-white">Bikash's Portfolio</h1>
        <nav>
          <ul className="flex space-x-4 text-white font-medium">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Projects</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
