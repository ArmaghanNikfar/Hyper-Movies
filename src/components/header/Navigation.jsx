import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const navMenu = [
    { name: "Movies", path: "/movies" },
    { name: "Shows", path: "/shows" },
    { name: "People", path: "/people" },
    { name: "More", path: "/more" },
  ];
  const userData = useContext(UserContext);

  function ActiveNavbar({ isActive }) {
    return isActive ? "text-rose-400" : "hover:text-white";
  }

  return (
    <>
      <nav className="container  mx-auto md:w-300 flex justify-between mb-6 uppercase">
        <div className="flex items-center ">
          <Link to="/">
            <h1 className="text-3xl mr-20">
              Hyper <span className="text-rose-600">Movies</span>{" "}
            </h1>
          </Link>
          <div className="hidden md:block">
            <ul className="flex gap-6 text-slate-200">
              {navMenu.map((menu, index) => (
                <li>
                  <NavLink className={ActiveNavbar} to={menu.path} key={index}>
                    {menu.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="hidden md:block  ml-auto items-center">
          {userData.user === null ? (
            <ul className="flex gap-6">
              <li>
                <NavLink className={ActiveNavbar} to="/login">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="bg-rose-600 hover:bg-rose-400 rounded-2xl px-3 py-2 text-white"
                  to="/signup"
                >
                  Sign Up
                </NavLink>
              </li>
            </ul>
          ) : (
            userData.user.username
          )}
        </div>
        {/* Mobile Menu Icon */}
        <div className="md:hidden ml-auto flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="white"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}

      <div
        className={`md:hidden mb-2 bg-slate-800 text-slate-300 text-center flex flex-col gap-4 transition-all duration-300 overflow-hidden
  ${isMobileMenuOpen ? "max-h-96 opacity-100 p-4" : "max-h-0 opacity-0 p-0"}`}
      >
        <ul className="flex flex-col gap-2 text-slate-200 justify-center px-4 border-b-2 border-slate-500 pb-4">
          {navMenu.map((menu, index) => (
            <li>
              <NavLink
                className={ActiveNavbar}
                to={menu.path}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {menu.name}
              </NavLink>
            </li>
          ))}
        </ul>
        {userData.user === null ? (
          <ul className="flex gap-4 items-center border-t-2 border-slate-500 py-4 justify-center">
            <li>
              <NavLink
                className={ActiveNavbar}
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsMobileMenuOpen(false)}
                to="/signup"
                className="bg-rose-600 rounded-2xl p-2 text-white"
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        ) : (
          userData.user.username
        )}
      </div>
    </>
  );
};

export default Navigation;
