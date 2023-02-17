import React from "react";
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gif from './/..//../assets/image/2023-02-17 08.38.42.gif';
import Gif1 from './/..//../assets/image/2023-02-17 08.39.29.gif';
import Gif2 from './/..//../assets/image/2023-02-17 08.40.21.gif';
import Gif3 from './/..//../assets/image/2023-02-17 08.42.56.gif';
import Gif4 from './/..//../assets/image/2023-02-17 08.44.41.gif';
import Gif5 from './/..//../assets/image/2023-02-17 08.53.37.gif';


const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
    dotsClass: "slick-dots custom-dots-class",
    arrowClass: "custom-arrow-class",
  };
  

  

const Carousel = () => {
  
  return (
    <Slider {...settings}>
      
        <h3 ><img src={Gif}  alt="projects"/> </h3>

      <div>
        <h3 ><img src={Gif1}  alt="projects"/></h3>
      </div>
      <div>
        <h3 ><img src={Gif2}  alt="projects"/></h3>
      </div>
      <div>
        <h3 ><img src={Gif3} alt="projects"/></h3>
      </div>
      <div>
        <h3><img src={Gif4}  alt="projects"/></h3>
      </div>
      <div>
        <h3><img src={Gif5}  alt="projects"/></h3>
      </div>
      <div>
        <h3>Slide 6</h3>
      </div>
    </Slider>
  );
};

export default Carousel;
