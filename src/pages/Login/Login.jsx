import React from 'react'
import "./Login.scss"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NavLink, useNavigate } from 'react-router-dom'
import logoTix from "../../assets/img/logoTix.png"
import { useSelector, useDispatch } from "react-redux"
import { loginActionApi } from '../../redux/reducers/UserManagermentReducer';
export default function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { userLogin } = useSelector(state => state.userManagermentReducer)
    const formik = useFormik({
        initialValues: {
            taikhoan: "",
            matKhau: ""
        },
        validationSchema: Yup.object({
            taikhoan: Yup.string().required("*Tài khoản không được bỏ trống !"),
            matKhau: Yup.string().required("*Mật khẩu không được bỏ trống !"),
        }),
        onSubmit: values => {
            dispatch(loginActionApi(values));
            if (userLogin) {
                navigate('/')
            }
        },
    });

    return (
        <div className='jss2526'>
            <div className="signin">

                <NavLink to="/">
                    <img src={logoTix} alt="logoTix" className="logoTix" />
                </NavLink>

                <div className="mb-3 mt-2">
                    <p className="text" style={{
                        fontWeight: "600"
                    }}>
                        Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!
                    </p>
                </div>
                <div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='form-group position-relative mb-2'>
                            <label htmlFor="taikhoan" style={{ fontSize: "18px" }}>Tài Khoản</label>
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
                                <div style={{ color: "red" }}>{formik.errors.taikhoan}</div>
                            ) : null}
                        </div>
                        <div className='form-group position-relative mb-2'>
                            <label htmlFor="matKhau" style={{ fontSize: "18px" }}>Mật Khẩu</label>
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
                                <div style={{ color: "red" }}>{formik.errors.matKhau}</div>
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
                            Log in
                        </button>

                        <p className="mt-2">
                            Or
                            <span
                                className="text-primary"
                                style={{ cursor: "pointer" }}
                                onClick={() => navigate('/register')}
                            >
                                {" "}
                                register now!
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}
