import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import DemoCarousel from "./DemoCarousel";
import logo from "./logo.png";
import { RiMenuLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.js";
import Home from "./Pages/Home";
import Orders from "./Pages/Orders";
import Products from "./Pages/Product";

const Header = () => {
  const onClickItem = (index) => {
    console.log("Clicked item:", index);
  };

  return (
    <>
      <div style={{ backgroundColor: "#f2efdd" }}>
        <Router>
          <header>
            <a
              className="btn"
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
              role="button"
              aria-controls="offcanvasExample"
              style={{ textAlign: "left !important" }}
            >
              <RiMenuLine
                style={{
                  height: "20px",
                  width: "20px",
                }}
              />
            </a>
            <IoSearchOutline
              style={{
                height: "20px",
                width: "20px",
                textAlign: "left !important",
                marginLeft: "5px",
              }}
            />
            <img src={logo} alt="Logo" className="Logo" />
            <Router>
              <Routes>
                <Route path="/" element={<Login />} />
                <VscAccount
                  style={{
                    height: "20px",
                    width: "20px",
                  }}
                />
              </Routes>
            </Router>
          </header>
          <Navbar />
        </Router>
      </div>
    </>
  );
};
export default Header;
