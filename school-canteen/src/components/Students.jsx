import React from "react";
import { Link } from "react-router-dom";
import Button from "./Home/Button";

const Students = ({ student }) => {
  return (
    <div className="relative bg-white border border-gray-200 p-2 rounded-3xl  flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition w-[260px]">
      <img
        src={student.image}
        alt={student.name}
        className="w-full h-54 rounded-3xl  object-cover"
      />

      <h2 className="text-xl font-light text-gray-900 ">{student.name}</h2>

      <p className="text-gray-500 text-sm">
        Referral Code:{" "}
        <span className="text-[#e07a5f] font-semibold">
          {student.referralCode}{" "}
        </span>
      </p>
      <Button className="absolute top-6 left-4 hidden md:block">
        ₹{student.totalSpent} spent
      </Button>

      <Link
        to={`/students/${student.id}`}
        className="mt-4 px-6 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition text-sm"
      >
        View Details
      </Link>
    </div>
  );
};

export default Students;
