// import React from "react";
// import logo from "./logo.png";
// import { RiMenuLine } from "react-icons/ri";
// import { IoSearchOutline } from "react-icons/io5";
// import { VscAccount } from "react-icons/vsc";

// function Login() {
//     return (
//          <>
//
//           <Router>
//           <header>
//             <a
//               className="btn"
//               data-bs-toggle="offcanvas"
//               href="#offcanvasExample"
//               role="button"
//               aria-controls="offcanvasExample"
//               style={{ textAlign: "left !important" }}
//             >
//               <RiMenuLine
//                 style={{
//                   height: "20px",
//                   width: "20px",
//                   // backgroundColor: "#f2efdd",
//                   // color: "black",
//                   // bsBtnBg: "#f2efdd",
//                   // border: "none",
//                 }}
//               />
//             </a>

//             <IoSearchOutline
//               style={{
//                 height: "20px",
//                 width: "20px",
//                 textAlign: "left !important",
//                 marginLeft: "5px",
//               }}
//             />
//             <img src={logo} alt="Logo" className="Logo" />
//             <VscAccount
//               style={{
//                 height: "20px",
//                 width: "20px",
//               }}
//             />
//           </header>
//       </Router>
// </>
//     );
// }
// export default Log;

import React from "react";
// import logo from "./logo.png";
import { RiMenuLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

function Login() {
  return (
    <>
      <div style={{ backgroundColor: "#f2efdd" }}>
        {/* <header style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <a
            className="btn"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            <RiMenuLine style={{ height: "20px", width: "20px" }} />
          </a>

          <IoSearchOutline style={{ height: "20px", width: "20px" }} />
          <img src={logo} alt="Logo" className="Logo" />
          <VscAccount style={{ height: "20px", width: "20px" }} />
        </header> */}
      </div>
    </>
  );
}

export default Login;
