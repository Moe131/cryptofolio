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
import Validate from "./pages/Validate/Validate";
import Profile from "./pages/Profile/Profile";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";



function App() {
  const [isAuthenticated, setAuthenticated] = React.useState(window.localStorage.getItem("isLoggedIn") === "true")
  const [user, setUser] = React.useState(window.localStorage.getItem("user"))
  function updateAuth(newVal) {
    setAuthenticated(newVal)
  }

  return (
    <div className="app">
      <BrowserRouter>
      <Navbar isAuthenticated={isAuthenticated} updateAuth={updateAuth} />
        <Routes>
          <Route index element={<Home isAuthenticated={isAuthenticated} />} />
          <Route path="/home" element={<Home  isAuthenticated={isAuthenticated} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/coin/:coinId" element={<Coin />} />
          <Route path="/signup" element={<SignUp  isAuthenticated={isAuthenticated} />} />
          <Route path="/validate" element={<Validate  isAuthenticated={isAuthenticated} updateAuth={updateAuth}  />} />
          <Route path="/login" element={<Login isAuthenticated={isAuthenticated} updateAuth={updateAuth}  />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/profile" element={<Profile isAuthenticated={isAuthenticated} user={user} />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;