import React, { useEffect } from 'react'
import "./Home.scss"
import Carousel from '../../components/Carousel/Carousel'
import ShowTime from '../../components/ShowTime/ShowTime'
import { useSelector,useDispatch } from 'react-redux/es/exports'
import { getDanhSachPhimAction } from '../../redux/reducers/FilmReducer'
import Seperate from '../../components/Seperate/Seperate'
import HomeMenu from '../../components/HomeMenu/HomeMenu'
import { getDanhSachHeThongRapAction } from '../../redux/reducers/CinemaManagerReducer'
import News from '../../components/News/News'
import HomeApp from '../../components/HomeApp/HomeApp'
import { layThongTinNguoiDungApi } from '../../redux/reducers/UserManagermentReducer'

export default function Home() {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getDanhSachPhimAction())
    dispatch(getDanhSachHeThongRapAction())
  },[])
  useEffect(()=>{
    dispatch(layThongTinNguoiDungApi())
  },[])

  const {heThongRapChieu} = useSelector(state => state.cinemaManagerReducer)
  console.log(heThongRapChieu);
  return (
    <div>
      <Carousel/>
      <section className="lichchieu" id="lichchieu">
        <div className="container-lg">
          <ShowTime />
        </div>
      </section>
      <section className="cumrap" id="cumRap">
        <Seperate/>
        {/* <HomeMenu heThongRapChieu={heThongRapChieu} /> */}
        <HomeMenu heThongRapChieu={heThongRapChieu}/>
      </section>
      <section className="news" id="tinTuc">
        <Seperate/>
        <News/>
      </section>
      
      <HomeApp/>
      

    </div>
  )
}
