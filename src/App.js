import "./App.css";
import Navbar from "./Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login.js";
import Home from "./Pages/Home";
import Orders from "./Pages/Orders";
import Products from "./Pages/Product";
import Header from "./Header.js";

function App() {
  return (
    <>
      <div style={{ backgroundColor: "#f2efdd" }}>
        <Header />
        <div className="main">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Orders />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
          </Routes>

        </div>
        <Navbar />
      </div>
    </>
  );
}

export default App;
