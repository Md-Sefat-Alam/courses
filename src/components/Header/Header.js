import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { user, setUser, logOut } = useAuth();

  console.log(user);
  const handleLogOut = () => {
    logOut();
  };
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
          {user.accessToken ? (
            <div>
              <span>{user.displayName ? user.displayName : user.email}</span>{" "}
              <button
                onClick={handleLogOut}
                className="border border-gray-400 px-2 py-0 rounded text-gray-500 "
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink activeClassName="font-bold" to="/login">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
