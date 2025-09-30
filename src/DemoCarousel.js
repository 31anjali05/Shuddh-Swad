import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // carousel styles
import Banner1 from "./Assets/Banner-1.PNG";
import Banner2 from "./Assets/Banner2.PNG";
import Banner3 from "./Assets/Banner-3.PNG";
import Banner4 from "./Assets/Banner-4.PNG";
import Banner5 from "./Assets/Banner-5.jpg";

const DemoCarousel = () => {
  const onClickItem = (index) => {
    console.log("Clicked item:", index);
  };

  const onClickThumb = (index) => {
    console.log("Clicked thumbnail:", index);
  };

  return (
    <Carousel
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      interval={2000}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
    >
      <div>
        <img src={Banner1} alt="Image1" className="Banner" />
      </div>
      <div>
        <img src={Banner2} alt="Image2" className="Banner" />
      </div>
      <div>
        <img src={Banner3} alt="Image3" className="Banner" />
      </div>
      <div>
        <img src={Banner4} alt="Image4" className="Banner" />
      </div>
      <div>
        <img src={Banner5} alt="Image5" className="Banner" />
      </div>
    </Carousel>
  );
};

export default DemoCarousel;
