import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import User from "./pages/User";
import Carddetails from "./pages/Carddetails";
import './Style.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
        <Route path="/cart/:id" element={<Carddetails />} />
      </Routes>
    </>
  );
}

export default App;
