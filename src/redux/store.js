import { configureStore } from '@reduxjs/toolkit'
import  filmReducer  from './reducers/FilmReducer'
import  cinemaManagerReducer  from './reducers/CinemaManagerReducer'
import  movieDetail  from './reducers/MovieDetail'
import userManagermentReducer from './reducers/UserManagermentReducer'
import datVeReducer from './reducers/DatVeReducer'
import quanLyFilmsReducer from './reducers/QuanLyFilmsReducer'
export const store = configureStore({
  reducer: {
    filmReducer,
    cinemaManagerReducer,
    movieDetail,
    userManagermentReducer,
    datVeReducer,
    quanLyFilmsReducer
  },
})