import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { USER_LOGIN } from '../../utils/settings/config'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'



export default function CheckoutTemplate(props) {
    const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem(USER_LOGIN)){
            return navigate("/login")
       }
    },[])
  return (
    <div>
      <Header/>
        <Outlet/>
      <Footer/>
    </div>
  )
}
