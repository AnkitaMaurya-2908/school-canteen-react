import React from "react";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-4 md:px-6 py-1 font-light text-xs md:text-sm lg:text-sm rounded-full border border-white text-white bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
