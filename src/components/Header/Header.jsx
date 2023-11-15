import React, { useState } from 'react'
import "./Header.scss";
import logo from "../../assets/img/web-logo.png"
import { NavLink } from 'react-router-dom';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { useNavigate,useLocation } from 'react-router-dom';
import { scroller } from "react-scroll";
import {useSelector,useDispatch} from "react-redux"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { dangXuatAction } from '../../redux/reducers/UserManagermentReducer';
export default function Header() {
  const { userLogin } = useSelector(state => state.userManagermentReducer)
  console.log("userLogin",userLogin);
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = (bool) => {
    setIsOpen(bool)
  }
  const navigate = useNavigate();
  const location = useLocation()
  const handleClickLink = (id) => {
    toggleDrawer(false)
    if (location.pathname === "/") {
      scroller.scrollTo(id, {
        duration: 800,
        smooth: "easeInOutQuart",
      });
    } else {
     
      setTimeout(() => {
        navigate("/",id)
      }, 50);
    }
  };
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(dangXuatAction())
  }
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} style={{ height: "50px" }} alt="logo" />
          </NavLink>

          <button className="navbar-toggler" type="button" onClick={()=>toggleDrawer(true)}>
            <i class="fa-solid fa-bars"></i>
          </button>

          <div className="navbar-nav">
            <span className="nav-link " key="lichchieu" onClick={()=> handleClickLink("lichchieu")} aria-current="page" >Lịch Chiếu</span>
            <span className="nav-link" key="cumRap" onClick={()=> handleClickLink("cumRap")} >Cụm Rạp</span>
            <span className="nav-link" key="tinTuc"  onClick={()=> handleClickLink("tinTuc")}>Tin Tức</span>
            <span className="nav-link " key="ungDung"  onClick={()=> handleClickLink("ungDung")}>Ứng Dụng</span>
          </div>

          {
            userLogin ?  (
              <div className="navbar-nav">
              <NavLink className='mx-2 user_header' to='/profile'>
                <AccountCircleIcon sx={{ fontSize: 40 }} style={{paddingRight:"10px"}}/>
                <span>{userLogin.hoTen}</span>
              </NavLink>
              <NavLink className='btn btn-danger' to='/' onClick={() => handleLogout()}>Đăng Xuất</NavLink>
            </div>
            ) : (
              <div className="navbar-nav">
              <NavLink className='btn btn-danger mx-2' to='/login'>Đăng Nhập</NavLink>
              <NavLink className='btn btn-danger' to='/register'>Đăng Ký</NavLink>
            </div>
            )
          }

        </div>
      </nav>
      <Drawer
        open={isOpen}
        onClose={()=>toggleDrawer(false)}
        direction='right'
      >
        <div className='drawer_header'>
            {userLogin ?               <NavLink className='mx-2 user_header' to='/login'>
                <AccountCircleIcon sx={{ fontSize: 40 }} style={{paddingRight:"10px"}}/>
                <span>{userLogin.hoTen}</span>
              </NavLink> : <NavLink className='btn btn-danger mx-2' to='/login'>Đăng Nhập</NavLink>}
            <span className="nav-link " key="lichchieu" onClick={()=> handleClickLink("lichchieu")} aria-current="page" >Lịch Chiếu</span>
            <span className="nav-link" key="cumRap" onClick={()=> handleClickLink("cumRap")} >Cụm Rạp</span>
            <span className="nav-link" key="tinTuc"  onClick={()=> handleClickLink("tinTuc")}>Tin Tức</span>
            <span className="nav-link " key="ungDung"  onClick={()=> handleClickLink("ungDung")}>Ứng Dụng</span>
           {userLogin ?  <button className='btn btn-danger' to='/' onClick={() => handleLogout()}>Đăng Xuất</button> : <NavLink className='btn btn-danger' to='/register'>Đăng Ký</NavLink>}
        </div>
      </Drawer>

    </header>
  )
}
