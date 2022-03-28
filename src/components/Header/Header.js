import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="fullWrapper bg-gray-200">
      <div className="wrapper flex justify-between items-center">
        <div className="text-black font-extrabold text-3xl">
          Course'<span className="text-red-900">S</span>
        </div>
        <div>
          <ul className="flex">
            <li className="p-2">
              <NavLink activeClassName="font-bold" to="/home">
                Home
              </NavLink>
            </li>
            <li className="p-2">
              <NavLink activeClassName="font-bold" to="/services">
                Services
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <button>
            <NavLink activeClassName="font-bold" to="/login">
              Login
            </NavLink>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
