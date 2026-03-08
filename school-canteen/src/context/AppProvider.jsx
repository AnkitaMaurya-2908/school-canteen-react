import { useState } from "react";
import { AppContext } from "./AppContext";
import { students as mockStudents } from "../assets/assests";

const AppProvider = ({ children }) => {

  const [students, setStudents] = useState(mockStudents);
  const [orders, setOrders] = useState([]);

  const addStudent = (student) => {
    setStudents((prev) => [...prev, student]);
  };

  const addOrder = (order) => {
    setOrders((prev) => [...prev, order]);
  };

  const value = {
    students,
    orders,
    addStudent,
    addOrder,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;