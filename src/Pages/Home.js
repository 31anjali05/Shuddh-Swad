import Cards from "./../Cards";
import Product1 from "./../Assets/Product1.png";
import Product2 from "./../Assets/Product2.png";
import Product3 from "./../Assets/Product3.png";
import Product4 from "./../Assets/Product4.png";
import Reviews from "./../Pages/Reviews";
import R1 from "./../Assets/1000171948.mp4";
import R2 from "./../Assets/1000171952.mp4";
import Values from "./../Values";
import vector1 from "./../Assets/sustainbility.PNG";
import vector2 from "./../Assets/Quality.PNG";
import vector3 from "./../Assets/health2.png";
import vector4 from "./../Assets/map03.png";
import authentic from "./../Assets/authentic.PNG";
import Available from "./../Assets/Available.PNG";
import Hygiene from "./../Assets/Hygiene.PNG";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import DemoCarousel from "../DemoCarousel";

const Home = () => {
  return (
    <div>
      <DemoCarousel />
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
          <div className="subtitle">Our Core Values</div>
          <div className="brief">
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
              incident sparked a powerful question: Why can't traditional snacks
              be both delicious and safe?
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
              paddingBottom: "20px",
            }}
          >
            Our Philosophy of Purity
          </div>
          <div className="container">
            <div className="row">
              <div className="col-4">
                <img src={authentic} alt="Authentication" className="values2" />
                <div className="vtitle">Authentic Recipes </div>
                <p>
                  We stay true to the traditions. Our recipes are passed down
                  through generations, ensuring every bite is a genuine taste of
                  heritage.
                </p>
              </div>
              <div className="col-4">
                <img src={Hygiene} alt="Hygiene" className="values2" />
                <div className="vtitle">Uncompromising Hygiene </div>
                <p>
                  From our kitchen to your home, we maintain the strictest
                  hygiene standards. Because good taste begins with good health.
                </p>
              </div>
              <div className="col-4">
                <img src={Available} alt="Available" className="values2" />
                <div className="vtitle">Available for All </div>
                <p>
                  Great taste shouldn't be seasonal or exclusive. We make our
                  traditional snacks affordable and available all year round,
                  for everyone to enjoy.
                </p>
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
            Join Our Movement We are more than a brand; we are a community that
            believes in dreaming big. Thank you for being a part of our story.
            Share the joy of Shuddh Swad with your friends and family.
          </div>
          <button className="followBtn">Follow us on Instagram</button>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div>Shuddh Swad</div>
                <p style={{ fontSize: "11px", paddingTop: "5px" }}>
                  Authentic and pure products delivered to your doorstep.
                  Experience the true taste of tradition.
                </p>
              </div>
              <div className="col-3">
                <div>Quick Links</div>
                <div style={{ fontSize: "12px", paddingTop: "5px" }}>
                  <div>Track Order</div>
                  <div>Return & Refund Policy</div>
                  <div>FAQ</div>
                  <div>Privacy Policy</div>
                </div>
              </div>
              <div className="col-3">
                <div>Company</div>
                <div style={{ fontSize: "12px", paddingTop: "5px" }}>
                  <div>Our Story</div>
                  <div>Contact Us</div>
                </div>
              </div>
              <div className="col-3">
                <div>Get in Touch</div>
                <div style={{ fontSize: "12px", paddingTop: "5px" }}>
                  <div>
                    <FaMapMarkerAlt /> Adra, Near DVC More, West Bengal 723121,
                    India.
                  </div>
                  <div>
                    <IoCall /> +91 8016380734
                  </div>
                  <div style={{ fontSize: "8px" }}>
                    Mon - Fri, 10am - 6:30pm
                  </div>
                  <div>
                    <IoIosMail />
                    contact@shuddhswad.shop
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </footer>
      </div>
    </div>
  );
};

export default Home;
