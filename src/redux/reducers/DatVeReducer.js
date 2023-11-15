import { createSlice } from '@reduxjs/toolkit'
import { quanLyDatVeService } from '../../services/QuanLyDatVeService';

const initialState = {
    chiTietPhongVe :{
        thongTinPhim:{},
        danhSachGhe:[]
      },
      danhSachGheDangDat:[
      ],
      danhSachGheKhachDat:[],
      tabActive:"1"
  };

export const datVeReducer = createSlice({
  name: 'datVeReducer',
  initialState,
  reducers: {
    layChiTietPhongVe : (state,action) =>{
        state.chiTietPhongVe = action.payload;
    },
    datVe : (state,action) => {
        let danhSachGheCapNhat = [...state.danhSachGheDangDat];
        let index = danhSachGheCapNhat?.findIndex(gheDD => gheDD.maGhe === action.payload.maGhe)
        if(index != -1){
          danhSachGheCapNhat.splice(index,1)
        }else{
          danhSachGheCapNhat.push(action.payload)
        }
        state.danhSachGheDangDat = danhSachGheCapNhat
    },
    datVeHoanTat : (state) => {
        state.danhSachGheDangDat = []
    },

  },
})

// Action creators are generated for each case reducer function
export const { layChiTietPhongVe,datVe,datVeHoanTat,chuyenTabs,changeTabActive} = datVeReducer.actions

export default datVeReducer.reducer

//api action

export const quanLyDatVeActionApi = (id) =>{
  return async (dispatch)=>{
    try {
        const result = await quanLyDatVeService.layChiTietPhongVe(id)
        console.log("lấy chi tiết vé",result);
        dispatch(layChiTietPhongVe(result.data.content))
    } catch (error) {
      console.log(error);
    }
  }
}
export const datVeAction = (thongTinDatVe) =>{
    return async (dispatch)=>{
      try {
        const result = await quanLyDatVeService.DatVe(thongTinDatVe);
        console.log("kết quả đặt vé ",result.data.content);
        await dispatch(quanLyDatVeActionApi(thongTinDatVe.maLichChieu))
        await dispatch(datVeHoanTat());
      } catch (error) {
        console.log(error);
      }
    }
  }


