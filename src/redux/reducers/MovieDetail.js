import { createSlice } from '@reduxjs/toolkit'
import { theaterService } from '../../services/theaterServices';

const initialState = {
    movieDetailShowtimes: [

    ],
    loadingMovieDetailShowtimes: false,
    errorMovieDetailShowtimes: null,
  
    commentList: [],
    loadingCommentList: false,  
    errorCommentList: null,
  
    postCommentObj: null,
    loadingPostComment: false,
    errorPostComment: null,
  
    likeCommentObj: {},
    loadingLikeComment: false,
    errorLikeComment: null,
  };

export const movieDetail = createSlice({
  name: 'movieDetail',
  initialState,
  reducers: {
    setMovieDetail: (state,action) => {
      state.movieDetailShowtimes = action.payload;
  },


  },
})

// Action creators are generated for each case reducer function
export const { setMovieDetail } = movieDetail.actions

export default movieDetail.reducer

//api action

export const setMovieDetailAction = (maPhim) =>{
  return async (dispatch)=>{
    try {
      const result = await theaterService.getThongTinLichChieuPhim(maPhim);
      dispatch(setMovieDetail(result.data.content))
    } catch (error) {
      console.log(error);
    }
  }
}


