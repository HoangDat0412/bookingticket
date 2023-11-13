import React from 'react'
import "./MovieItem.scss"
import { Link } from 'react-router-dom'
export default function MovieItem(props) {
    const { movie } = props
    return (
        <div className='px-1 align-top'>
            <div
                style={{
                    padding: "7px",
                    cursor: "pointer",
                }}
            >
                <div className="film">
                    <div className="film__img">
                        <div className="film__poster" style={{
                            backgroundImage: `url(${movie.hinhAnh})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: 4,
                        }}>
                            <div className="film__overlay">

                            </div>
                            {/* <div className="film__trailer">

                            </div> */}
                        </div>
                        <div className="film__content">
                            <div className="film__name">
                                <div className="name">
                                    <p>
                                        <span className="c18">C18</span>
                                        {movie.tenPhim}
                                    </p>
                                </div>
                                <p class="pt-2">
                                    <span class="text_info">120 phút - Tix {movie.danhGia}</span>
                                </p>
                            </div>
                            <div className="film__button">
                                <Link style={{ background: movie.dangChieu ? "#60c5ef" : "#fb4226" }}
                                to={{
                                        pathname: `/detail/${movie.maPhim}`,
                                        state : {movie}
                                    }} >{movie.dangChieu ? "Đặt Vé" : "Xem Thông Tin"}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
