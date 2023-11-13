import { createSlice } from '@reduxjs/toolkit'
import { cinemaManagementService } from '../../services/CinemaManagerService';

const initialState = {
    heThongRapChieu: [],
  
    loadingTheaterList: false,
    errorTheaterList: null,
    theaterList: [],
  };

export const cinemaManagerReducer = createSlice({
  name: 'cinemaManagerReducer',
  initialState,
  reducers: {
    // setListFilm: (state,action) => {
    //     state.listFilm = action.payload;
    //     let arr = action.payload.filter((film)=> film.dangChieu === true);
    //     state.listFilmDefault = arr
    // },
    setHeThongRapChieu: (state,action)=>{
        state.heThongRapChieu = action.payload
    }


  },
})

// Action creators are generated for each case reducer function
export const { setHeThongRapChieu } = cinemaManagerReducer.actions

export default cinemaManagerReducer.reducer

//api action

export const getDanhSachHeThongRapAction = () =>{
    return async (dispatch)=>{
        try {
            const result = await cinemaManagementService.layThongTinLichChieuRap();

            dispatch(setHeThongRapChieu(result.data.content))
        } catch (error) {
            console.log(error);
        }
    }
}
