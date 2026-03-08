import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import HomePage from "./pages/HomePage";
// import SnacksPage from "./pages/SnacksPage";
// import StudentsPage from "./pages/StudentsPage";
// import StudentDetailPage from "./pages/StudentDetailPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const SnacksPage = lazy(() => import("./pages/SnacksPage"));
const StudentsPage = lazy(() => import("./pages/StudentsPage"));
const StudentDetailPage = lazy(() => import("./pages/StudentDetailPage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p className="text-center mt-10">Loading...</p>}>
        <div className="min-h-screen bg-white flex flex-col bg-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/snacks" element={<SnacksPage />} />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/students/:id" element={<StudentDetailPage />} />
          </Routes>
          <Footer />
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
