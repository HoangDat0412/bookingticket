import { createSlice } from '@reduxjs/toolkit'
import { filmManagementService } from '../../services/FilmManagementService';

const initialState = {
  listFilm :[] ,
  listFilmDefault:[
    {
        "maPhim": 11088,
        "tenPhim": "SÁT THỦ JOHN WICK 2",
        "biDanh": "sat-thu-john-wick-2",
        "trailer": "https://www.youtube.com/watch?v=yjRHZEUamCc",
        "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/sat-thu-john-wick-2_gp01.jpg",
        "moTa": "John Wick là một sát thủ khét tiếng trong giới xã hội đen. Những kẻ trong nghề thường truyền tai nhau rằng: “Hắn không phải là ác quỷ. Hắn là người được cử đi để giết ác quỷ”. Phần hai của John Wick bắt đầu khi nhân vật sát thủ máu lạnh của Keanu Reeves đặt chân tới thành phố Rome, Italy và không may đụng độ với một gã gangster khét tiếng tại đất nước này.",
        "maNhom": "GP01",
        "ngayKhoiChieu": "2023-10-06T17:27:10.973",
        "danhGia": 10,
        "hot": false,
        "dangChieu": true,
        "sapChieu": false
      },
      {
        "maPhim": 11090,
        "tenPhim": "One Piece 3",
        "biDanh": "one-piece-3",
        "trailer": "",
        "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/one-piece-1_gp01.jpg",
        "moTa": "One Piece là bộ truyện tranh dành cho thiếu niên của tác giả nổi tiếng Oda Eiichiro. Bộ manga này được chuyển thể thành một series anime nhiều tập hài hước, đặc sắc. Phim Đảo Hải Tặc mở đầu câu chuyện bằng cảnh xử tử vua hải tặc Gol D. Roger. Trước khi chết ông đã tiết lộ rằng mình có một kho báu được giấu ngoài biển. Nếu ai tìm thấy kho báu thì chúng sẽ thuộc về người đó. Rất nhiều người gan dạ đã đổ xô ra biển để tìm kiếm kho báu bí ẩn của vua hải tặc Gol D. Roger.",
        "maNhom": "GP01",
        "ngayKhoiChieu": "2023-01-09T15:50:04.02",
        "danhGia": 8,
        "hot": true,
        "dangChieu": true,
        "sapChieu": false
      },
      {
        "maPhim": 11184,
        "tenPhim": "Nàng Tiên Cá từ Disney",
        "biDanh": "nang-tien-ca-tu-disney",
        "trailer": "https://www.youtube.com/watch?v=lAoBjciGva4",
        "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/nang-tien-ca-tu-disney_gp01.jpg",
        "moTa": "Bạn sẽ hy sinh điều gì để có thể thoát khỏi cuộc sống dưới đáy đại dương? Khám phá ngay những điều bạn phải đánh đổi để có thể sống ở thế giới bạn luôn ao ước trong NàngTiênCá từ Disney. Bộ phim đang là tâm điểm chú ý này sẽ được lên sóng tại các cụm rạp trong tháng 5 tới.",
        "maNhom": "GP01",
        "ngayKhoiChieu": "2023-03-23T00:00:00",
        "danhGia": 0,
        "hot": true,
        "dangChieu": true,
        "sapChieu": true
      },
      {
        "maPhim": 11201,
        "tenPhim": " Babylon",
        "biDanh": "babylon",
        "trailer": "https://www.youtube.com/watch?v=dNOnx46FXrI",
        "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/babylon_gp01.jpg",
        "moTa": "Babylon là một bộ phim điện ảnh Mỹ thuộc thể loại hài sử thi – chính kịch công chiếu năm 2022 do Damien Chazelle viết kịch bản kiêm đạo diễn, với sự tham gia của các diễn viên chính gồm Brad Pitt, Margot Robbie, Diego Calva, Jean Smart, Jovan Adepo và Li Jun Li. ",
        "maNhom": "GP01",
        "ngayKhoiChieu": "2023-03-26T00:00:00",
        "danhGia": 8,
        "hot": false,
        "dangChieu": true,
        "sapChieu": false
      }
  ]
}

export const filmReducer = createSlice({
  name: 'filmReducer',
  initialState,
  reducers: {
    setListFilm: (state,action) => {
        state.listFilm = action.payload;
        let arr = action.payload.filter((film)=> film.dangChieu === true);
        state.listFilmDefault = arr
    },
    setListFilmDefault: (state,action) => {
      if(action.payload){
        let arr = state.listFilm.filter((film)=> film.dangChieu === true);
        state.listFilmDefault = arr
      }else{
        let arr = state.listFilm.filter((film)=> film.dangChieu === false);
        state.listFilmDefault = arr
      }
    }

  },
})

// Action creators are generated for each case reducer function
export const { setListFilm,setListFilmDefault} = filmReducer.actions

export default filmReducer.reducer

//api action

export const getDanhSachPhimAction = () =>{
    return async (dispatch) =>{
        try {
            const result = await filmManagementService.layDanhSachFilm()
            const action = setListFilm(result.data.content)
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}