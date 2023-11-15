import React, { useState } from 'react'
import "./Carousel.scss"
import Slider from "react-slick";
import homeCarouselData from "../../constants/homeCarouselData";
import { Button, Modal } from 'antd';

export default function Carousel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [trailer,setTrailer] = useState("")
  console.log(trailer);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    
  };

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
            <div key={item?.maPhim} className='jss425' >
              <img src={item?.hinhAnh} alt="banner" className='jss426' />
              <div class="jss427"></div>
              <div className="jss661 jss664 play" onClick={()=> {
                setIsModalOpen(pre => !pre)
                setTrailer(item?.trailer)
              }}>
                <img src="https://movie-booking-project.vercel.app/img/carousel/play-video.png" class="jss662" alt="play"/>
              </div>
            </div>
          );
        })}
            </Slider>
            <Modal  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}  width={800} height={500} >
       {isModalOpen ?  <iframe src={trailer} style={{width:"100%",height:"100%"}}></iframe> : ""}
      </Modal>
        </div>

    )
}
