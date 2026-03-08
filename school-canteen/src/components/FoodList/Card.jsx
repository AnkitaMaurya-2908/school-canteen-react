import React, { useState } from "react";
import Button from "../Home/Button";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import OrderModal from "../OrderModal";
import { students } from "../../assets/assests";

const Card = ({ name, image, price }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="relative flex flex-col border border-gray-300 p-2 rounded-lg shadow-sm max-w-70 overflow-hidden">
        <div className="relative">
          <img
            className="rounded-md w-[300px] h-[200px] object-cover"
            src={image}
            alt={name}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent rounded-md" />

          <Button className="absolute top-3 left-3">{name}</Button>

          {/* Quantity */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1">
            <div className=" px-3 flex items-center justify-center bg-white rounded-md shadow">
              {price}
            </div>
          </div>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="mt-2 w-full text-sm py-1.5 rounded-md bg-[#e07a5f] text-white"
        >
          Order
        </button>
      </div>

      {showModal && (
        <OrderModal
          students={students}
          name={name}
          image={image}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default React.memo(Card);
