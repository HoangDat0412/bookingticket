import React from 'react'
import "./Desktop.scss"
import Slider from 'react-slick';
import MovieItem from './MovieItem/MovieItem';
import { useSelector } from 'react-redux';


export default function Desktop() {

  const {listFilmDefault} = useSelector(state=> state.filmReducer);
  console.log(listFilmDefault);
    const settings = {
        className: "center slider",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        speed: 500,
        rows: 2,
        slidesPerRow: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };
      function NextArrow(props) {
        const { onClick } = props;
        return (
          <i 
          style={{
            right:"-50px"
          }}
          onClick={onClick}
          className="fa fa-angle-right arrow_desktop"></i>
        );
      }
    
      function PrevArrow(props) {
        const { onClick } = props;
        return (
          <i 
          style={{
            left:"-50px"
          }}
          onClick={onClick}
          className="fa fa-angle-left arrow_desktop"></i>
          
        );
      }

  return (
    <div className='desktop'>
<Slider {...settings} >
      {
        listFilmDefault.slice(0,12).map((movie,index)=>{
          return <MovieItem movie={movie} index={index}></MovieItem>
        })
      }
            
          
        </Slider>
    </div>
  )
}
