import React from "react";
import { snacks } from "../../assets/assests";
import Card from "./Card";

const FoodList = () => {
  return (
    <>
    <div className="text-center mt-12 px-4">

        <h1 className="text-3xl md:text-4xl font-bold text-[#463f3a] mb-3">
          What you want to eat today?
        </h1>

        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          From light bites to hearty classics — freshly prepared every day
          with ingredients you can trust.
        </p>
      </div>

    
    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-12 pt-12">

      {snacks.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          image={item.image}
          price={`₹${item.price}`}
          description={item.description}
        />
      ))}

    </div>
    </>
  );
};

export default FoodList;