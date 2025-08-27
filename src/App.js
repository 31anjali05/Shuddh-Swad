import "./App.css";
import Navbar from "./Navbar";
import DemoCarousel from "./DemoCarousel";
import logo from "./logo.png";
import { RiMenuLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import Home from "./Pages/Home";
import Orders from "./Pages/Orders";
import Products from "./Pages/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cards from "./Cards";
import Product1 from "./Products/Product1.png";
import Product2 from "./Products/Product2.png";
import Product3 from "./Products/Product3.png";
import Product4 from "./Products/Product4.png";
import Reviews from "./Pages/Reviews";
import R1 from "./Review/1000171948.mp4";
import R2 from "./Review/1000171952.mp4";
import Values from "./Values";
import vector1 from "./Values/sustainbility.PNG";
import vector2 from "./Values/Quality.PNG";
import vector3 from "./Values/health2.png";
import vector4 from "./Values/map03.png";

function App() {
  return (
    <>
      <div style={{ backgroundColor: "#f2efdd" }}>
        <Router>
          <header>
            <a
              className="btn btn-primary"
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
              }}
            />
            <img src={logo} alt="Logo" className="Logo" />
          </header>

          <Navbar />
          <DemoCarousel />

          <div className="main">
            <Routes>
              <Route path="/" exact={true} component={Home} />
              <Route path="/Order" exact={true} component={Orders} />
              <Route path="/Products" exact={true} component={Products} />{" "}
            </Routes>
          </div>
        </Router>
        <strong className="title">Our Products</strong>
        <div className="container-fluid gx-7">
          <div className="row">
            <Cards
              product={Product1}
              name="Traditional Thekua"
              price="Rs. 299.00"
              prevPrice="Rs. 900.00"
            />
            <Cards
              product={Product2}
              name="Jaggery Thekua"
              prevPrice="Rs. 599.00"
              price="Rs.299.00"
            />
            <Cards
              product={Product3}
              name="Traditional Thekua 3 Combo"
              price="Rs. 799.00"
              prevPrice="Rs. 1300.00"
            />
            <Cards
              product={Product4}
              name="Jaggery Thekua 3 Combo"
              price="Rs. 799.00"
              prevPrice="Rs. 1300.00"
            />
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div>
            <strong className="title">Reviews</strong>
          </div>
          <div className="container-fluid" style={{ padding: "50px" }}>
            <div className="row">
              <div className="col-2 review">
                <Reviews video={R1} />
              </div>
              <div className="col-2 review">
                <Reviews video={R2} />
              </div>
              <div className="col-2 review">
                <Reviews video={R1} />
              </div>
              <div className="col-2 review">
                <Reviews video={R2} />
              </div>
              <div className="col-2 review">
                <Reviews video={R1} />
              </div>
              <div className="col-2 review">
                <Reviews video={R2} />
              </div>
            </div>
          </div>
          <div style={{ padding: "50px" }}>
            <div className="Subtitle">Our Core Values</div>
            <div className="Brief">
              These principles guide everything we do, from sourcing ingredients
              to serving our customers.
            </div>
            <div
              className="container-fluid"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="row">
                {/* <div className="col-3">
          </div> */}
                <Values
                  vector={vector1}
                  name="Sustainability"
                  details="We source ingredients responsibly and use eco-friendly packaging to minimize our environmental footprint"
                />
                <Values
                  vector={vector2}
                  name="Quality"
                  details="We never compromise on quality, using only premium ingredients to create exceptional snacks."
                />
                <Values
                  vector={vector3}
                  name="Health"
                  details="We believe healthy snacking should be delicious, creating nutritious options without artificial additives."
                />
                <Values
                  vector={vector4}
                  name="Community"
                  details="We support local farmers and give back to communities through various charitable initiatives."
                />
              </div>
            </div>
          </div>
          <div
            style={{
              padding: "50px",
              backgroundColor: "#fcf8f3",
              // borderBottomColor: "#f3c716ff",
              // borderBottomWidth: "15px",
            }}
          >
            <strong
              style={{
                color: "#a13d1c",
                fontSize: "50px",
                fontFamily: "Merriweather",
              }}
            >
              The Shuddh Swad Story
            </strong>
            <div
              style={{
                fontSize: "15px",
                color: "#a13d1c",
                paddingLeft: "38%",
                paddingRight: "38%",
              }}
            >
              A journey of passion, purity, and the pursuit of an Indian dream.
            </div>
          </div>
          <hr
            style={{
              color: "#f3d355ff",
              opacity: "2px",
              margin: "0px",
            }}
          />
          <div style={{ padding: "50px", backgroundColor: "#fbf9f6" }}>
            <div
              style={{
                color: "#b95000",
                fontSize: "22.5px",
                fontFamily: "Merriweather",
                fontWeight: "bold",
              }}
            >
              Our Mission
            </div>
            <div
              style={{
                fontSize: "14px",
                paddingLeft: "34%",
                paddingRight: "34%",
              }}
            >
              To be India's finest snacks brand, delivering high-quality,
              hygienic, and affordable traditional snacks that you can trust and
              enjoy, any day of the year. We are not just selling snacks; we are
              reviving a legacy of purity.
            </div>
          </div>
          <div style={{ padding: "50px", backgroundColor: "#ffffff" }}>
            <div
              style={{
                color: "#b95000",
                fontSize: "10px",
                fontWeight: "bold",
              }}
            >
              THE BEGINNING
            </div>
            <div
              style={{
                fontSize: "32px",
                fontFamily: "Merriweather",
                fontWeight: "bold",
              }}
            >
              The Spark of an Idea
            </div>
            <div
              style={{
                fontSize: "12px",
                paddingLeft: "34%",
                paddingRight: "34%",
              }}
            >
              <p>
                The journey of Shuddh Swad began with a powerful, personal
                experience. Our 16-year-old founder's simple desire for a local
                thekua turned into a harsh lesson on food hygiene. This single
                incident sparked a powerful question: Why can't traditional
                snacks be both delicious and safe?
              </p>
              <p>
                This was followed by another realization during Chhath Puja—the
                best snacks were scarce and seasonal. This scarcity and lack of
                hygiene wasn't just a problem; it was an opportunity to create
                something better.
              </p>
            </div>
          </div>
          <div style={{ padding: "50px", backgroundColor: "#fbf9f6" }}>
            <div
              style={{
                color: "#b95000",
                fontSize: "10px",
                fontWeight: "bold",
              }}
            >
              OUR VALUES
            </div>
            <div
              style={{
                fontSize: "32px",
                fontFamily: "Merriweather",
                fontWeight: "bold",
              }}
            >
              Our Philosophy of Purity
            </div>
            <div className="container">
              <div className="row">
                <div className="col-4">
                  Authentic Recipes We stay true to the traditions. Our recipes
                  are passed down through generations, ensuring every bite is a
                  genuine taste of heritage.
                </div>
                <div className="col-4">
                  Authentic Recipes We stay true to the traditions. Our recipes
                  are passed down through generations, ensuring every bite is a
                  genuine taste of heritage.
                </div>
                <div className="col-4">
                  Authentic Recipes We stay true to the traditions. Our recipes
                  are passed down through generations, ensuring every bite is a
                  genuine taste of heritage.
                </div>
              </div>
            </div>
          </div>
          <div style={{ padding: "50px", backgroundColor: "#f2efdd" }}>
            <div
              style={{
                fontSize: "28px",
                color: "#b95000",
                fontWeight: "bold",
                fontFamily: "Merriweather",
              }}
            >
              Join Our Movement
            </div>
            <div
              style={{
                fontSize: "14px",
                paddingLeft: "34%",
                paddingRight: "34%",
              }}
            >
              Join Our Movement We are more than a brand; we are a community
              that believes in dreaming big. Thank you for being a part of our
              story. Share the joy of Shuddh Swad with your friends and family.
            </div>
            <button>Follow us on Instagram</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
