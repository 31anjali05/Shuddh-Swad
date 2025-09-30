import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      {" "}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/order">Orders</Link>
            </li>
            <li>
              <Link to="/">Track your order</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/">Return Policy</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
            <li>
              <Link to="/">Shipping Policy</Link>
            </li>
            <li>
              <Link to="/">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
