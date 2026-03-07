import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const OrderModal = ({ name, image, onClose, students }) => {
  const [student, setStudent] = useState("");
  const [qty, setQty] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleOrder = () => {
    if (!student) return;

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
        <div className="relative h-36">
          <img src={image} alt={name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <p className="absolute bottom-3 left-4 text-white font-semibold text-lg">
            {name}
          </p>

          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white rounded-full p-1"
          >
            <IoClose className="size-5" />
          </button>
        </div>

        <div className="p-5 flex flex-col gap-4">
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">
              Select Student
            </label>

            <div className="flex flex-wrap gap-2">
              {students.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setStudent(s)}
                  className={`px-3 py-1.5 rounded-full text-sm border ${
                    student?.id === s.id
                      ? "bg-[#e07a5f] text-white border-[#e07a5f]"
                      : "border-gray-200 text-gray-600"
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">
              Quantity
            </label>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-8 h-8 flex items-center justify-center rounded-full border"
              >
                <FiMinus className="size-4" />
              </button>

              <span className="text-lg font-bold">{qty}</span>

              <button
                onClick={() => setQty((q) => Math.min(5, q + 1))}
                className="w-8 h-8 flex items-center justify-center rounded-full border"
              >
                <FaPlus className="size-3" />
              </button>

              <span className="text-xs text-gray-400">max 5</span>
            </div>
          </div>

          <button
            onClick={handleOrder}
            disabled={!student}
            className={`w-full py-2.5 rounded-xl text-sm font-semibold ${
              submitted
                ? "bg-green-500 text-white"
                : student
                  ? "bg-[#e07a5f] text-white"
                  : "bg-gray-100 text-gray-400"
            }`}
          >
            {submitted
              ? "✓ Order Placed!"
              : `Confirm Order${student ? ` for ${student.name}` : ""}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
