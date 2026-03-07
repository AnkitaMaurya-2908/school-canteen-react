import React from "react";
import { students } from "../assets/assests";
import Students from "../components/Students";

const StudentsPage = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-12">
      <div className="text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#463f3a] mb-3">
          Students
        </h1>

        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Browse the list of students, check their referral codes, and track how
          much they have spent on snacks in the school canteen.
        </p>
      </div>

      <div className="grid mt-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {students.map((student) => (
          <Students key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
};

export default StudentsPage;
