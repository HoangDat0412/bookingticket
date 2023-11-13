import React, { useEffect } from 'react'
import "./Detail.scss"
import CircularProgress from '@mui/material/CircularProgress';
import { Rating } from '@mui/material';
import { Tabs } from 'antd';
import moment from "moment";
import "moment/locale/vi";
import { useParams } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import LichChieuDesktop from '../../components/LichChieuDesktop/LichChieuDesktop';
import formatDate from '../../utils/settings/formatDate';
import { setMovieDetailAction } from '../../redux/reducers/MovieDetail';

export default function Detail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const param = useParams();

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(setMovieDetailAction(param.id))
  },[])
  const {movieDetailShowtimes} = useSelector(state => state.movieDetail)
  const filmDetail = movieDetailShowtimes;
  console.log(filmDetail);
  let arr = [
    {
      name: "LỊCH CHIẾU",
      content: (<div>
         {<LichChieuDesktop data={filmDetail.heThongRapChieu}/>}
      </div>)
    },
    {
      name: "THÔNG TIN",
      content: (<div className='detail_infomation'>
                  <div className={`row text-white detailMovie`}>
            <div className="col-sm-6 col-xs-12">
              <div className="row mb-2">
                <p className={`float-left contentTitle`}>
                  Ngày công chiếu
                </p>
                <p className={`float-left contentInfo`}>
                  {formatDate(filmDetail?.ngayKhoiChieu?.slice(0, 10)).YyMmDd}
                </p>
              </div>
              <div className="row mb-2">
                <p className={`float-left contentTitle`}>Đạo diễn</p>
                <p className={`float-left contentInfo`}>
                  {" "}
                  Adam Wingard{" "}
                </p>
              </div>
              <div className="row mb-2">
                <p className={`float-left contentTitle`}>
                  Diễn viên
                </p>
                <p className={`float-left contentInfo`}>
                  Kyle Chandler, Rebecca Hall, Eiza González, Millie Bobby Brown
                </p>
              </div>
              <div className="row mb-2">
                <p className={`float-left contentTitle`}>Thể Loại</p>
                <p className={`float-left contentInfo`}>
                  hành động, giả tưởng, ly kỳ, thần thoại
                </p>
              </div>
              <div className="row mb-2">
                <p className={`float-left contentTitle`}>
                  Định dạng
                </p>
                <p className={`float-left contentInfo`}>
                  2D/Digital
                </p>
              </div>
              <div className="row mb-2">
                <p className={`float-left contentTitle`}>
                  Quốc Gia SX
                </p>
                <p className={`float-left contentInfo`}>Mỹ</p>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="row mb-2">
                <p className={`float-left contentTitle`}>Nội dung</p>
              </div>
              <div className="row mb-2">
                <p>
                  {filmDetail?.moTa}
                
                </p>
              </div>
            </div>
          </div>
      </div>)
    },
    {
      name: "ĐÁNH GIÁ",
      content: (<div>
        ĐÁNH GIÁ
      </div>)
    }
  ]

  return (
    <div className='detail_home'>

      <div className="detail_film">
        <div className="linear_detail"></div>
        <div className="detail_film_background"
          style={{
            backgroundImage: `url(${filmDetail.hinhAnh})`
          }}
        >

        </div>
        <div className="detail_film_content" >
          <div className="img_Detail" style={{
            backgroundImage: `url(${filmDetail?.hinhAnh})`
          }}>
            <img alt="poster" src={filmDetail?.hinhAnh} style={{
              display: "none"
            }} />

          </div>
          <div class="detail_film_infomation">
            <p> {formatDate(filmDetail?.ngayKhoiChieu?.slice(0, 10)).YyMmDd}</p>
            <p class="detail_infomation_p"><span class="jss1382">C18</span> {filmDetail?.tenPhim}</p>
            <p>{`${filmDetail.thoiLuong ?? "120"} phút - ${filmDetail.danhGia} Tix`} - 2D/Digital</p>
            <button class="button_detail_content">Mua vé</button>
          </div>

          <div className="rate">

            <div className="circular">
              <span class="danhGia">{filmDetail.danhGia}</span>
              <CircularProgress
                variant="determinate"
                size="100%"
                value={100}
                className="behined"
                color="success"

              />
              <CircularProgress
                variant="determinate"
                size="100%"
                value={filmDetail.danhGia*10}
                className="fabProgress"
                color="secondary"
              />

            </div>

            <div className="rateStar">
              <Rating value={(filmDetail.danhGia * 5) / 10} precision={0.5} readOnly />
            </div>
            <span>{100} người đánh giá</span>
          </div>
        </div>

      </div>

      <div className="detail_tabs" style={{
                            margin: "auto",
                            maxWidth: "940px",
      }}>
        <Tabs
          style={{
            // margin: "1rem 2rem",
            // height: "705px"
          }}
          defaultActiveKey="1"
          centered
          items={arr.map((_, i) => {
            return {
              label: `${_.name}`,
              key: i,
              children: _.content
            };
          })}
        />
      </div>
    </div>
  )
}
