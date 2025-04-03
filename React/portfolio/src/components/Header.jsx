import React from "react";

const Header = () => {
  return (
    <div className="w-full h-[80px] bg-orange-400">
        <div className="flex justify-between items-center h-full px-4">
          <h1 className="text-2xl font-bold text-white">Bikash's Portfolio</h1>
          <ul className="flex space-x-4 text-white">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
    </div>
  );
};

export default Header;
