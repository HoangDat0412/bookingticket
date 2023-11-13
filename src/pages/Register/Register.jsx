import React, { useEffect } from 'react'
import "./Register.scss"
import logoTix from "../../assets/img/logoTix.png"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useSelector,useDispatch} from "react-redux";
import { useNavigate,useLocation } from 'react-router-dom';
import Swal from "sweetalert2"
import { registerActionApi } from '../../redux/reducers/UserManagermentReducer';
export default function Register() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const {responseRegister,errorRegister} = useSelector(state => state.userManagermentReducer)
    
    // useEffect(()=>{

    // },[responseRegister])

  const formik = useFormik({
    initialValues: {
        taikhoan: "",
        matKhau: "",
        hoTen:"",
        email:"",
        SDT:"",
        hoTen:""
    },
    validationSchema: Yup.object({
        taikhoan: Yup.string().required("*Tài khoản không được bỏ trống !"),
        matKhau: Yup.string().required("*Mật khẩu không được bỏ trống !"),
        hoTen:Yup.string().required("*Họ Tên không được bỏ trống !"),
        SDT:Yup.string().required("*Số Điện Thoại không được bỏ trống !"),
        email:Yup.string().email().required("email không được bỏ trống")
    }),
    onSubmit: values => {
        dispatch(registerActionApi(values))
        if(responseRegister){
            Swal.fire({
                title: "Bạn đã đăng ký thành công",
                icon: "success"
              });
            navigate("/login",)
        }
        if(errorRegister){
            Swal.fire({
                title: errorRegister,
                icon: "error"
              });
        }
    },
});




return (
    <div className='jss2526'>
        <div className="register">
            <img src={logoTix} alt="logoTix" className="logoTix" />
            <div className="mb-3 mt-2">
                <p className="text" style={{
                    fontWeight: "600"
                }}>
                    Đăng Ký để được nhiều ưu đãi, mua vé và bảo mật thông tin!
                </p>
            </div>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <div className='form-group position-relative mb-2'>
                        <label htmlFor="taikhoan" style={{ fontSize:"18px"}}>Tài Khoản</label>
                        <input
                            id="taikhoan"
                            name="taikhoan"
                            className="form-control"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.taikhoan}
                        />
                        {formik.touched.taikhoan && formik.errors.taikhoan ? (
                            <div style={{color:"red"}}>{formik.errors.taikhoan}</div>
                        ) : null}
                    </div>
                    <div className='form-group position-relative mb-2'>
                        <label htmlFor="matKhau" style={{ fontSize:"18px"}}>Mật Khẩu</label>
                        <input
                            id="matKhau"
                            name="matKhau"
                            className="form-control"
                            type="password"
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
            Register
          </button>


                </form>
            </div>
        </div>
    </div>
)
}
