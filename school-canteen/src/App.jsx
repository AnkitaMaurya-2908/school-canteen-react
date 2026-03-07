import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SnacksPage from "./pages/SnacksPage";
import StudentsPage from "./pages/StudentsPage";
import StudentDetailPage from "./pages/StudentDetailPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
          <div className="min-h-screen bg-white flex flex-col bg-white">
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/snacks" element={<SnacksPage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/students/:id" element={<StudentDetailPage />} />
      </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;