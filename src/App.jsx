import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { AuthProvider } from "./hooks/AuthContext.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ResumePage from "./pages/ResumePage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import UploadPage from "./pages/UploadPage.jsx";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;