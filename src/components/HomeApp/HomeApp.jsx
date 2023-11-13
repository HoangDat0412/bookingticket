import React from 'react'
import "./HomeApp.scss"
import "./HomeApp.scss"
import Slider from 'react-slick';
export default function HomeApp() {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
      };
      const textDecoration = { textDecoration: "underline" };
  return (
    <div
    style={{
       marginTop:"250px"
      
    }}
    >
            <div id="ungdung" className='ungDung'>
      <div className="mobileApp">
        <div className="mainMaxWidth">
          <div className="row">
            <div className="col-lg-6 ">
              <div
                className={`mobileApp__left    text-lg-left`}
              >
                <div>
                  <p className="textLeft1">Ứng dụng tiện lợi dành cho</p>
                  <p className="textLeft1">người yêu điện ảnh</p>
                  <br />
                  <p>
                    Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm
                    rạp và đổi quà hấp dẫn.
                  </p>
                  <br />
                  <button
                    className="btn btn-danger"
                  >
                    Cài đặt Progressive App!
                  </button>
                  <br />
                  <p className="py-3">
                    Tix có hai phiên bản{" "}
                    <span>
                      <a
                        href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={textDecoration}
                      >
                        IOS
                      </a>
                    </span>{" "}
                    và{" "}
                    <span>
                      <a
                        style={textDecoration}
                        href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Android
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mobileApp__right1">
                <img
                  className="bgmobile"
                  src="/assets/img/mobile/mobile.png"
                  alt="mobile"
                />
                <Slider {...settings} className='slick-mobile'>
                  <div>
                    <img src="assets/img/mobile/slide1.jpg" alt="" />
                  </div>
                  <div>
                    <img src="assets/img/mobile/slide2.jpg" alt="" />
                  </div>
                  <div>
                    <img src="assets/img/mobile/slide3.jpg" alt="" />
                  </div>
                  <div>
                    <img src="assets/img/mobile/slide4.jpg" alt="" />
                  </div>
                  <div>
                    <img src="assets/img/mobile/slide5.jpg" alt="" />
                  </div>
                  <div>
                    <img src="assets/img/mobile/slide6.jpg" alt="" />
                  </div>
                  <div>
                    <img src="assets/img/mobile/slide7.jpg" alt="" />
                  </div>
                  <div>
                    <img src="assets/img/mobile/slide8.jpg" alt="" />
                  </div>
                  <div>
                    <img src="assets/img/mobile/slide9.jpg" alt="" />
                  </div>
                  <div>
                    <img src="assets/img/mobile/slide10.jpg" alt="" />
                  </div>
                  <div>
                    <img src="assets/img/mobile/slide11.jpg" alt="" />
                  </div>
                  <div>
                    <img src="assets/img/mobile/slide12.jpg" alt="" />
                  </div>
                  <div>
                    <img src="assets/img/mobile/slide13.jpg" alt="" />
                  </div>
                  <div>
                    <img src="assets/img/mobile/slide14.jpg" alt="" />
                  </div>
                  <div>
                    <img src="assets/img/mobile/slide15.jpg" alt="" />
                  </div>
                  <div>
                    <img src="assets/img/mobile/slide16.jpg" alt="" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
