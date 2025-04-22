import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-800 p-4 text-white">
      <Link to="/" ><div>My Website</div></Link>
      <div className="flex space-x-4">
        <NavLink to="/" className={({isActive}) => isActive ? "underline" : "" }><span>Home</span></NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? "underline" : ""}><span>About</span></NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? "underline" : ""}><span>Contact</span></NavLink>
        <NavLink to="/profile" className={({isActive}) => isActive ? "underline" : ""}><span>Profile</span></NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
