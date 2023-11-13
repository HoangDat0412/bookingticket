import React from 'react'
import "./Carousel.scss"
import Slider from "react-slick";
import homeCarouselData from "../../constants/homeCarouselData";


export default function Carousel() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
       
    };
    function NextArrow(props) {
      const { onClick } = props;
      return (
        <i style={{ right: "15px" }}
        onClick={onClick}
        className="fa fa-angle-right Arrow"></i>
      );
    }
  
    function PrevArrow(props) {
      const { onClick } = props;
      return (
        <i style={{ left: "15px" }}
        onClick={onClick}
        className="fa fa-angle-left Arrow"></i>
        
      );
    }
    return (
        <div className='carousel'>
            <Slider {...settings}>
            {homeCarouselData.map((item) => {
          return (
            <div key={item.maPhim} >
              <img src={item?.hinhAnh} alt="banner"  />

            </div>
          );
        })}
            </Slider>
        </div>
    )
}
