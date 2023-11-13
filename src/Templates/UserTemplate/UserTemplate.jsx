import React from 'react'
import { Outlet } from 'react-router-dom'
import "./UserTemplate.scss"
export default function UserTemplate() {
  return (
    <div className='' style={{
        display:"flex"
    }}>
         <div className="background_usertemplate">
          <Outlet/>
         </div>
  
    </div>
  )
}
