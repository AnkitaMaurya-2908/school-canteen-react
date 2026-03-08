
import React, { useState } from "react";

const AddStudent = ({ setStudents }) => {

  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const generateReferralCode = () => {
    return "EDZ" + Math.floor(1000 + Math.random() * 9000);
  };

  const handleAddStudent = () => {

    if (!name.trim()) return;

    const newStudent = {
      id: Date.now(),
      name,
      referralCode: generateReferralCode(),
      totalSpent: 0,
      image:
        image ||
        "https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331256_1280.png",
    };

    setStudents((prev) => [...prev, newStudent]);

    setName("");
    setImage("");
    setShowModal(false);
  };

  return (
    <div>

      <button
        onClick={() => setShowModal(true)}
        className="bg-[#e07a5f] text-white px-5 py-2 rounded-lg"
      >
        Add Student
      </button>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center"
          onClick={() => setShowModal(false)}
        >

          <div
            className="bg-white rounded-xl p-6 w-[350px] flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >

            <h2 className="text-lg font-semibold">Add Student</h2>

            <input
              type="text"
              placeholder="Enter student name"
              className="border rounded-md px-4 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Paste image URL (optional)"
              className="border rounded-md px-4 py-2"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />

            <div className="flex justify-end gap-3">

              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded-md"
              >
                Cancel
              </button>

              <button
                disabled={!name.trim()}
                onClick={handleAddStudent}
                className="bg-[#e07a5f] text-white px-4 py-2 rounded-md disabled:opacity-50"
              >
                Add
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default AddStudent;