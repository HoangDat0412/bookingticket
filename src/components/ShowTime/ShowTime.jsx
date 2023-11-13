import React from 'react'
import "./ShowTime.scss"
import Desktop from './Desktop/Desktop'
import { useDispatch } from 'react-redux'
import { setListFilmDefault } from '../../redux/reducers/FilmReducer'

export default function ShowTime() {
  const dispatch = useDispatch()
  return (
    <div className='showtime'>
        <div className='btn_showtime'>
            <button className='btn btn-success' onClick={()=>{
              dispatch(setListFilmDefault(true))
            }}>Đang chiếu</button>
            <button className='btn btn-danger' onClick={()=>{
              dispatch(setListFilmDefault(false))
            }}>Sắp chiếu</button>
        </div>

        <Desktop/>
    </div>
  )
}
