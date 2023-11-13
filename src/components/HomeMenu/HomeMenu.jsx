import { Radio, Space, Tabs } from "antd";
import moment from "moment/moment";
import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import "./HomeMenu.scss"
export default function HomeMenu(props) {
    const [tabPosition, setTabPosition] = useState("left");
    console.log("hệ thống rạp", props.heThongRapChieu);

    const renderHeThongRap = () => {
        return props.heThongRapChieu.map((item, index) => {
            return;
        });
    };

    return (
        <div className="home_menu">
            <div style={{
                    border: "1px solid #ebebec",
                    margin: "auto",
                    maxWidth: "940px",
                    padding:"25px 5px",
                    borderRadius: "4px",
                
            }}>
            <Tabs
                tabPosition={tabPosition}
                items={props.heThongRapChieu.map((item, i) => {
                    const id = String(i + 1);
                    return {
                        label: (
                            <>
                                                <img
                                                style={{
                                                    width:"50px",
                                                    height:"auto"
                                                }}
                  className="logo"
                  src={item.logo}
                  alt="logoTheater"
                />
                            </>
                        ),
                        key: id,
                        children: (
                            <Tabs
                                tabPosition={tabPosition}
                                items={item.lstCumRap.map((rap, i) => {
                                    const id = String(i + 1);
                                    return {
                                        label: (
                                            <div
                                                style={{
                                                    width: "300px",
                                                    display: "flex",
                                                    alignItems:"center"
                                                }}
                                            >
                                               
                                                <img src={rap.hinhAnh} className="w-[50px] h-[52px]" />
                                                <br />
                                                <div className="text-left ml-2" style={{textWrap:"wrap"}}>
                                                   <span > {rap.tenCumRap }</span>
                                                    <p className="text-[#949494]">{rap.diaChi.length < 30 ? rap.diaChi : <>{rap.diaChi.slice(1,30) + "..."}</> }</p>
                                                </div>
                                               
                                            </div>
                                        ),
                                        key: id,
                                        children: (
                                            <div className="tenCumrap">
                                                {rap.danhSachPhim.map((phim, index) => {
                                                    return (
                                                        <Fragment key={index}>
                                                            <div className="my-5" style={{ display: "flex",flexDirection:"column",gap:"15px" }}>
                                                                <div className="flex">
                                                                    <img
                                                                        className="w-[75px] h-[75px]"
                                                                        src={phim.hinhAnh}
                                                                        alt="tenphim"
                                                                        onError={(e) => { e.target.onerror = null; e.target.src = "https://cdnimg.vietnamplus.vn/t870/uploaded/xpcwvovt/2022_03_24/ttxvn_ha_noi_1.jpg" }}
                                                                    />
                                                                    <div className="ml-4">
                                                                        <h1 className="font-bold  text-green-800">
                                                                            {phim.tenPhim}
                                                                        </h1>
                                                                        <p>{rap.diaChi}</p>
                                                                       
                                                                    </div>
                                                                </div>
                                                                <div className="grid grid-cols-5 gap-3">
                                                                            {phim.lstLichChieuTheoPhim.map(
                                                                                (lichChieu, index) => {
                                                                                    return (
                                                                                        <NavLink to={`/checkout/${lichChieu.maLichChieu}`} className="button_datve" >
                                                                                        {moment(lichChieu.ngayChieuGioChieu).format(
                                                                                         "hh:mm A"
                                                                                       )}
                                                                                     </NavLink>
                                                                                    );
                                                                                }
                                                                            )}
                                                                        </div>
                                                            </div>
                                                            <hr />
                                                        </Fragment>
                                                    );
                                                })}
                                            </div>
                                        ),
                                    };
                                })}
                            />
                        ),
                    };
                })}
            />
            </div>
        </div>
    );
}
