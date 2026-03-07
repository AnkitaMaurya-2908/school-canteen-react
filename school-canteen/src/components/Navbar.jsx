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
          <LuAlignJustify className="size-6" />
        </button>

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
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
