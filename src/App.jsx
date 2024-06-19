import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home";
import Coin from "./pages/Coin/Coin";
import NoPage from "./pages/NoPage/NoPage";
import ContactUs from "./pages/ContactUs/ContactUs";
import About from "./pages/About/About";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/coin/:coinId" element={<Coin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;