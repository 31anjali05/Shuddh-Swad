import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import logo from "./Assets/logo.png";
import { RiMenuLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

const Header = () => {
  const navigate = useNavigate();
  const onClickItem = (index) => {
    console.log("Clicked item:", index);
  };

  function navigateToLogin() {
    navigate("/login");
  }

  return (
    <>
      <div style={{ backgroundColor: "#f2efdd" }}>
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
          <VscAccount
            style={{
              height: "20px",
              width: "20px",
              float: "right",
            }}
            onClick={() => navigateToLogin()}
          />
        </header>
        <Navbar />
      </div>
    </>
  );
};
export default Header;
