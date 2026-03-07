import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LuAlignJustify } from "react-icons/lu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white text-gray-700 border-b border-gray-100 transition-all">
        <Link to="/">
          <h1 className="text-[#463f3a] text-xl font-semibold">
            Edzy<span className="text-[#e07a5f] font-bold">Canteen</span>
          </h1>
        </Link>

        <ul className="md:flex hidden items-center gap-10 text-[#463f3a]">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#e07a5f]"
                  : "hover:text-gray-500/80 transition"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#e07a5f]"
                  : "hover:text-gray-500/80 transition"
              }
              to="/snacks"
            >
              Snacks
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#e07a5f]"
                  : "hover:text-gray-500/80 transition"
              }
              to="/students"
            >
              Students
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#e07a5f]"
                  : "hover:text-gray-500/80 transition"
              }
              to="/footer"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        <button
          type="button"
          className="bg-white text-gray-600 border border-gray-300 md:inline hidden text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
        >
          Explore Menu
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="menu-btn"
          type="button"
          className="menu-btn inline-block md:hidden active:scale-90 transition"
        >
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#000">
            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
        </svg> */}
          <LuAlignJustify className="size-6" />
        </button>

        {/* <div className="mobile-menu absolute top-[70px] left-0 w-full bg-white p-6 hidden md:hidden">
        <ul className="flex flex-col space-y-4 text-lg text-[#463f3a]">
            <li><Link to="/" className="text-sm">Home</Link></li>
            <li><Link to="/snacks" className="text-sm">Snacks</Link></li>
            <li><Link to="/students" className="text-sm">Students</Link></li>
            <li><Link to="#footer" className="text-sm">Contact Us</Link></li>
        </ul>

        <button type="button" className="bg-white text-gray-600 border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full">
            Explore Menu
        </button>
    </div> */}
        {isOpen && (
          <div className="absolute top-[70px] left-0 w-full bg-white p-6 md:hidden">
            <ul className="flex flex-col space-y-4 text-lg text-[#463f3a]">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-sm text-[#e07a5f] font-semibold"
                      : "text-sm hover:text-gray-500/80"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/snacks"
                  className={({ isActive }) =>
                    isActive
                      ? "text-sm text-[#e07a5f] font-semibold"
                      : "text-sm hover:text-gray-500/80"
                  }
                >
                  Snacks
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/students"
                  className={({ isActive }) =>
                    isActive
                      ? "text-sm text-[#e07a5f] font-semibold"
                      : "text-sm hover:text-gray-500/80"
                  }
                >
                  Students
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/footer"
                  className={({ isActive }) =>
                    isActive
                      ? "text-sm text-[#e07a5f] font-semibold"
                      : "text-sm hover:text-gray-500/80"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
