const Navbar = () => {
  return (
    <>
      {/* <div className={show ? "sidenav active" : "d-none"}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Orders</a>
          </li>
          <li>
            <a href="/">Track your order</a>
          </li>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Return Policy</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <a href="/">Shipping Policy</a>
          </li>
          <li>
            <a href="/">Terms of Service</a>
          </li>
        </ul>
      </div> */}

      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Orders</a>
            </li>
            <li>
              <a href="/">Track your order</a>
            </li>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Return Policy</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">Shipping Policy</a>
            </li>
            <li>
              <a href="/">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
