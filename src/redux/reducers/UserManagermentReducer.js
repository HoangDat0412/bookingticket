import { createSlice } from '@reduxjs/toolkit'
import { STATUS_CODE, TOKEN, USER_LOGIN } from '../../utils/settings/config';
import { userManagermentService } from '../../services/userManagermentService';

const userLogin = localStorage.getItem(USER_LOGIN)
  ? JSON.parse(localStorage.getItem(USER_LOGIN))
  : null;

const initialState = {
    userLogin: userLogin,
    thongTinNguoiDung: {},
  
    usersList: null,
    loadingUsersList: false,
    errorUsersList: null,
  
    successAddUser: null,
    loadingAddUser: false,
    errorAddUser: null,
  
    successDelete: "",
    loadingDelete: false,
    errorDelete: null,
  
    successUpdateUser: "",
    loadingUpdateUser: false,
    errorUpdateUser: null,
  
    responseRegister: null,
    loadingRegister: false,
    errorRegister: null,
  };

export const userManagermentReducer = createSlice({
  name: 'userManagermentReducer',
  initialState,
  reducers: {
    setResponseRegister : (state,action)=>{
      state.responseRegister = action.payload
      state.errorRegister = null;
    }, 
    setErrorRegister : (state,action)=>{
      state.responseRegister = null;
      state.errorRegister = action.payload
    },
    dangNhapAction : (state,action)=>{
      localStorage.setItem(USER_LOGIN,JSON.stringify(action?.payload))
      localStorage.setItem(TOKEN,action.payload?.accessToken)
      state.userLogin = action.payload
    },
    dangXuatAction : (state,action)=>{
      localStorage.removeItem(USER_LOGIN);
      localStorage.removeItem(TOKEN);
      state.responseRegister = null;
      state.userLogin = null;
    }

  },
})

// Action creators are generated for each case reducer function
export const { setResponseRegister,setErrorRegister,dangNhapAction,dangXuatAction } = userManagermentReducer.actions

export default userManagermentReducer.reducer

//api action

export const registerActionApi = (thongTinDangKy) =>{
  return async (dispatch)=>{
    try {
      const res = await userManagermentService.dangKy(thongTinDangKy)
      if (res.data.statusCode === STATUS_CODE.SUCCESS) {
        dispatch(setResponseRegister(res.data.content))
      }
    } catch (error) {
      dispatch(setErrorRegister(error))
    }
  }
}

export const loginActionApi = (thongTinDangNhap)=>{
  return async (dispatch) => {
    try {
      const result = await userManagermentService.dangNhap(thongTinDangNhap);
      dispatch(dangNhapAction(result.data.content))
      
    } catch (error) {
      console.log("error login",error);
      dispatch(dangNhapAction(null))
    }
  }
}




