import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

export default function HomeTemplate() {

  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
