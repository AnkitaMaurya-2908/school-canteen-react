import React from "react";
import { menu_list } from "../../assets/assests";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="mt-16 flex flex-col gap-6" id="explore-menu">
      <div className="text-center px-4">
        <span className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-3 bg-orange-50 text-orange-500 border border-orange-100">
          What are you craving?
        </span>

        <h1 className="text-3xl md:text-4xl font-bold text-[#463f3a] mb-3">
          Explore Our Menu
        </h1>

        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          From light bites to hearty classics — freshly prepared every day with
          ingredients you can trust.
        </p>
      </div>

      <div className="flex items-start justify-start md:justify-center gap-4 md:gap-6 px-4 overflow-x-auto scrollbar-hide pb-2">
        {menu_list.map((item, index) => {
          const isActive = category === item.menu_name;
          return (
            <div
              key={index}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name,
                )
              }
              className="flex-shrink-0 flex flex-col items-center gap-2 cursor-pointer group"
            >
              <div
                className={`rounded-full p-[3px] transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-br from-orange-400 to-orange-500 shadow-lg shadow-orange-200"
                    : "bg-transparent border-2 border-gray-200 group-hover:border-orange-300"
                }`}
              >
                <div
                  className={`rounded-full overflow-hidden p-[3px] transition-all duration-300 ${
                    isActive
                      ? "bg-white"
                      : "bg-gray-50 group-hover:bg-orange-50"
                  }`}
                >
                  <img
                    src={item.menu_image}
                    alt={item.menu_name}
                    className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full transition-transform duration-300 group-hover:-translate-y-1"
                  />
                </div>
              </div>

              <span
                className={`text-xs md:text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-400 group-hover:text-gray-600"
                }`}
              >
                {item.menu_name}
              </span>

              <span
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isActive ? "bg-orange-500" : "bg-transparent"
                }`}
              />
            </div>
          );
        })}
      </div>

      <div className="px-4">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
    </div>
  );
};

export default ExploreMenu;
