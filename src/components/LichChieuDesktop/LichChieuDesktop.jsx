import React, { Fragment } from 'react'
import "./LichChieuDesktop.scss"
import { Tabs } from "antd";
import formatDate from '../../utils/settings/formatDate';
import { NavLink } from "react-router-dom"
import moment from "moment/moment";
export default function LichChieuDesktop(props) {
  const { data } = props
  console.log(data);
  return (
    <div className='lichChieu'>
      <div style={{
        border: "1px solid #ebebec",
        margin: "auto",
        maxWidth: "940px",
        padding: "25px 5px",
        borderRadius: "4px",
        backgroundColor: "#fff",
        color: "#000"


      }}>
        <Tabs
          tabPosition={"left"}
          items={data?.map((htr, i) => {

            return {
              label: (
                <div className='wrapper'>
                  <img
                    className="logo"
                    src={htr.logo}
                    alt="logoTheater"
                  />
                  <span>{htr.tenHeThongRap}</span>
                </div>
              ),
              key: i,
              children: (
                <div>
                  {htr.cumRapChieu?.map((cumRap, index) => {
                    return <div className="mt-2" key={index}>
                      <div className="flex flex-row">
                        <img style={{ width: 60, height: 60 }} src={cumRap.hinhAnh} alt="..." />
                        <div className="ml-2">
                          <p style={{ fontSize: 20, fontWeight: 'bold', lineHeight: 1 }} >{cumRap.tenCumRap}</p>
                          <p className="text-gray-400" style={{ marginTop: 0 }}>{cumRap.diaChi}</p>
                        </div>
                      </div>
                      <div className="thong-tin-lich-chieu grid grid-cols-4 pt-3">
                        {cumRap.lichChieuPhim?.slice(0, 12).map((lichChieu, index) => {
                          return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index} className="col-span-1 text-green-800 font-bold">

                            <button className="button_datve">
                              {moment(lichChieu.ngayChieuGioChieu).format(
                                "hh:mm A"
                              )}
                            </button>
                          </NavLink>
                        })}
                      </div>
                    </div>
                  })}
                 
                </div>
              ),
            };
          })}
        />

      </div>
    </div>
  )
}
