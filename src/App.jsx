import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home";
import Coin from "./pages/Coin/Coin";
import NoPage from "./pages/NoPage/NoPage";


function App() {
  return (
    <div className="app">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/coin/:coinId" element={<Coin />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App;