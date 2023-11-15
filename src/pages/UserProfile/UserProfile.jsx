import React, { useEffect } from 'react'
import "./UserProfile.scss"
import { Tabs } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from "sweetalert2"
import {useSelector,useDispatch} from "react-redux";
import { useNavigate,useLocation } from 'react-router-dom';
import { layThongTinNguoiDungApi, updateThongTinUser } from '../../redux/reducers/UserManagermentReducer';
export default function UserProfile() {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const {userLogin,thongTinNguoiDung,successUpdateUser} = useSelector(state => state.userManagermentReducer);
  let tongTien = 0;
  thongTinNguoiDung?.thongTinDatVe?.map((item) => {
    return tongTien += (Number(item?.danhSachGhe?.length) * item?.giaVe);
  })

  useEffect(()=>{
    if(!userLogin){
      navigate("/login")
    }
  },[])


  const getIdSeat = (danhSachGhe) => {
    return danhSachGhe
      .reduce((listSeat, seat) => {
        return [...listSeat, seat.tenGhe];
      }, [])
      .join(", ");
  };
  const formik = useFormik({
    initialValues: {
        taikhoan: thongTinNguoiDung?.taiKhoan,
        matKhau: thongTinNguoiDung?.matKhau,
        hoTen:thongTinNguoiDung?.hoTen,
        email:thongTinNguoiDung?.email,
        SDT:thongTinNguoiDung?.soDT,
        hoTen:thongTinNguoiDung?.hoTen
    },
    validationSchema: Yup.object({
        taikhoan: Yup.string().required("*Tài khoản không được bỏ trống !"),
        matKhau: Yup.string().required("*Mật khẩu không được bỏ trống !"),
        hoTen:Yup.string().required("*Họ Tên không được bỏ trống !"),
        SDT:Yup.string().required("*Số Điện Thoại không được bỏ trống !"),
        email:Yup.string().email().required("email không được bỏ trống")
    }),
    onSubmit: values => {
      dispatch(updateThongTinUser(values))
      if (successUpdateUser) {
        Swal.fire({
          title: "Bạn đã cập nhật thành công",
          icon: "success"
        });
      }
    },
});
  const arr = [
    {
      name:"THÔNG TIN TÀI KHOẢN",
      content : (
       <div className='container'>
         <div className='row'>
          <div className="col-7">
          <form onSubmit={formik.handleSubmit}>
                    <div className='form-group position-relative mb-2'>
                        <label htmlFor="taikhoan" style={{ fontSize:"18px"}}>Tài Khoản</label>
                        <input
                            id="taikhoan"
                            name="taikhoan"
                            className="form-control"
                            type="text"
                            disabled
                            style={{
                              backgroundColor:"#e9ecef"
                            }}
                            value={formik.values.taikhoan}
                        />
                    </div>
                    <div className='form-group position-relative mb-2'>
                        <label htmlFor="matKhau" style={{ fontSize:"18px"}}>Mật Khẩu</label>
                        <input
                            id="matKhau"
                            name="matKhau"
                            className="form-control"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.matKhau}
                        />
                        {formik.touched.matKhau && formik.errors.matKhau ? (
                            <div style={{color:"red"}}>{formik.errors.matKhau}</div>
                        ) : null}
                    </div>
                    <div className='form-group position-relative mb-2'>
                        <label htmlFor="hoTen" style={{ fontSize:"18px"}}>Họ Tên</label>
                        <input
                            id="hoTen"
                            name="hoTen"
                            className="form-control"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.hoTen}
                        />
                        {formik.touched.hoTen && formik.errors.hoTen ? (
                            <div style={{color:"red"}}>{formik.errors.hoTen}</div>
                        ) : null}
                    </div>
                    <div className='form-group position-relative mb-2'>
                        <label htmlFor="email" style={{ fontSize:"18px"}}>Email</label>
                        <input
                            id="email"
                            name="email"
                            className="form-control"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div style={{color:"red"}}>{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div className='form-group position-relative mb-2'>
                        <label htmlFor="SDT" style={{ fontSize:"18px"}}>Số Điện Thoại</label>
                        <input
                            id="SDT"
                            name="SDT"
                            className="form-control"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.SDT}
                        />
                        {formik.touched.SDT && formik.errors.SDT ? (
                            <div style={{color:"red"}}>{formik.errors.SDT}</div>
                        ) : null}
                    </div>




                    <button
            style={{
              backgroundColor: "#3E63b6",
              borderColor: "#3E63b6",
              cursor: "pointer",
            }}
            type="submit"
            className="btn btn-success mt-3 container"
          >
            Cập Nhật
          </button>


                </form>
          </div>
          <div className="col-5">
          <ul className="list-group mt-2">
            <li className="list-group-item text-muted">Hoạt động</li>
            <li className="list-group-item text-right">
              <span className="float-left">
                <strong>Bình luận</strong> 
              </span>
              0
            </li>
            <li className="list-group-item text-right">
              <span className="float-left">
                <strong>Bình luận được thích</strong>
              </span>
              0
            </li>
            <li className="list-group-item text-right">
              <span className="float-left">
                <strong>Số lần thanh toán</strong>
              </span>
              {thongTinNguoiDung?.thongTinDatVe?.length}
            </li>
            <li className="list-group-item text-right">
              <span className="float-left">
                <strong>Tổng tiền </strong>
              </span>
              {tongTien}
            </li>
          </ul>
          </div>
        </div>
       </div>
      )
    },
    {
      name:"LỊCH SỬ ĐẶT VÉ",
      content : (
        <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr className="whitespace-nowrap">
              <th scope="col">Stt</th>
              <th scope="col">Tên phim</th>
              <th scope="col">Thời lượng phim</th>
              <th scope="col">Ngày đặt</th>
              <th scope="col">Tên Rạp</th>
              <th scope="col">Mã vé</th>
              <th scope="col">Tên ghế</th>
              <th scope="col">Giá vé(vnđ)</th>
              <th scope="col">Tổng tiền(vnđ)</th>
            </tr>
          </thead>
          <tbody>
            {thongTinNguoiDung.thongTinDatVe
              ?.map((user, index) => (
                <tr key={user.maVe} className="whitespace-nowrap">
                  <th scope="row">{index + 1}</th>
                  <td>{user.tenPhim}</td>
                  <td>{user.thoiLuongPhim}</td>
                  <td>
                    {new Date(user.ngayDat).toLocaleDateString()},{" "}
                    {new Date(user.ngayDat).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                  <td>
                    {user.danhSachGhe[0].tenHeThongRap},{" "}
                    {user.danhSachGhe[0].tenRap}
                  </td>
                  <td>{user.maVe}</td>
                  <td>
                    {getIdSeat(user.danhSachGhe)}
                  </td>
                  <td>
                    {new Intl.NumberFormat("it-IT", {
                      style: "decimal",
                    }).format(user.giaVe)}
                  </td>
                  <td>
                    {new Intl.NumberFormat("it-IT", {
                      style: "decimal",
                    }).format(user.giaVe * user.danhSachGhe.length)}
                  </td>
                </tr>
              ))
              .reverse()}
          </tbody>
        </table>
      </div>
      )
    }
  ]
  return (
    <div className='profile_user mt-5 mb-5'>
        <Tabs
                defaultActiveKey="1"
                centered
                items={arr?.map((_, i) => {
                    return {
                        label: `${_.name}`,
                        key: i,
                        children: _.content
                    };
                })}
            />  
    </div>
  )
}
