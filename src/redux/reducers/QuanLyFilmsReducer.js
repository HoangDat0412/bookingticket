import { createSlice } from '@reduxjs/toolkit'
import { quanLyPhimService } from '../../services/QuanLyFilmsServices';
import { useNavigate } from 'react-router-dom';
const initialState = {
    arrFilm: [
        {
          "maPhim": 1282,
          "tenPhim": "Ban tay diet quy",
          "biDanh": "ban-tay-diet-quy",
          "trailer": "https://www.youtube.com/embed/uqJ9u7GSaYM",
          "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png",
          "moTa": "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
          "maNhom": "GP00",
          "ngayKhoiChieu": "2019-07-29T00:00:00",
          "danhGia": 5,
          "hot": true,
          "dangChieu": false,
          "sapChieu": true
        },
        {
            "maPhim": 1282,
            "tenPhim": "Ban tay diet quy",
            "biDanh": "ban-tay-diet-quy",
            "trailer": "https://www.youtube.com/embed/uqJ9u7GSaYM",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png",
            "moTa": "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5,
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          }
    ],
    dangChieu: true,
    sapChieu:false,
    arrFilmDefault: [],
    filmDetail:{},
    thongTinPhim:{}
  };

export const quanLyFilmsReducer = createSlice({
  name: 'quanLyFilmsReducer',
  initialState,
  reducers: {
    layDanhSachFilms : (state,action)=>{
        state.arrFilm = action.payload;
        state.arrFilmDefault = action.payload
    },
    setThongTinFilms : (state,action)=>{
        state.thongTinPhim = action.payload
    }


  },
})

// Action creators are generated for each case reducer function
export const { layDanhSachFilms,setThongTinFilms } = quanLyFilmsReducer.actions

export default quanLyFilmsReducer.reducer

//api action
export const LayDanhSachFilmsApi = (tenPhim="")=>{
    return async (dispatch)=>{
        try {
            const result = await quanLyPhimService.layDanhSachPhim(tenPhim)
            dispatch(layDanhSachFilms(result?.data.content))
        } catch (error) {
            console.log(error);
        }
    }
}

export const xoaPhimActionApi = (maPhim) =>{
    return async (dispatch) =>{
        try {
            const result = await quanLyPhimService.xoaPhim(maPhim);
            console.log('result',result.data.content);
            alert('Xoá phim thành công !');
            //Sau khi xoá load lại danh sách phim mới;
            dispatch(LayDanhSachFilmsApi())
        } catch (error) {
            console.log(error);
        }
    }
}

export const themPhimUploadHinhApi = (formData) => {
    return async (dispatch) =>{
        try {
            let result = await quanLyPhimService.themPhimUploadHinh(formData);
            alert('Thêm phim thành công!')
            console.log('result', result.data.content);
        } catch (error) {
            console.log(error);
        }
    }
}

export const getInformationFilmActionApi = (maPhim) => {
    return async (dispatch)=>{
        try {
            const result = await quanLyPhimService.layThongTinPhim(maPhim)
            dispatch(setThongTinFilms(result?.data.content))
        } catch (error) {
            console.log(error);
        }
    }
}

export const updateFilmsActionApi = (formData) =>{
    return async (dispatch)=>{
        try {
            console.log(formData,"form data api reducer");
            const result = await quanLyPhimService.capNhatPhimUpload(formData);
            alert('Cập nhật phim thành công!')
            console.log('result', result.data.content);

            dispatch(LayDanhSachFilmsApi());
        } catch (error) {
            console.log(error);
        }
    }
}



