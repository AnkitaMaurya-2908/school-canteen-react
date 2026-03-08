import { MdArrowOutward } from "react-icons/md";
import React from "react";

const ButtonWithIcon = ({ label = "Order Now", className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`group flex items-center gap-2 bg-orange-500 hover:bg-orange-400 transition-colors duration-200 text-white font-light text-sm rounded-full  ${className}`}
    >
      {label}
      <span className="flex items-center justify-center w-7 h-7 bg-black group-hover:bg-white/30 transition-colors duration-200 rounded-full text-white text-xs">
        <MdArrowOutward className="size-4" />
      </span>
    </button>
  );
};

export default React.memo(ButtonWithIcon);
