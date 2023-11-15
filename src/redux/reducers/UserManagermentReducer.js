import { createSlice } from "@reduxjs/toolkit";
import { STATUS_CODE, TOKEN, USER_LOGIN } from "../../utils/settings/config";
import { userManagermentService } from "../../services/userManagermentService";

const userLogin = localStorage.getItem(USER_LOGIN)
  ? JSON.parse(localStorage.getItem(USER_LOGIN))
  : null;
const thongTinNguoiDung = localStorage.getItem("THONG_TIN_NGUOI_DUNG")
? JSON.parse(localStorage.getItem("THONG_TIN_NGUOI_DUNG"))
: {};

const initialState = {
  userLogin: userLogin,
  thongTinNguoiDung: thongTinNguoiDung,

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
  name: "userManagermentReducer",
  initialState,
  reducers: {
    setResponseRegister: (state, action) => {
      state.responseRegister = action.payload;
      state.errorRegister = null;
    },
    setErrorRegister: (state, action) => {
      state.responseRegister = null;
      state.errorRegister = action.payload;
    },
    dangNhapAction: (state, action) => {
      localStorage.setItem(USER_LOGIN, JSON.stringify(action?.payload));
      localStorage.setItem(TOKEN, action.payload?.accessToken);
      state.userLogin = action.payload;
    },
    dangXuatAction: (state, action) => {
      localStorage.removeItem(USER_LOGIN);
      localStorage.removeItem(TOKEN);
      localStorage.removeItem("THONG_TIN_NGUOI_DUNG");
      state.responseRegister = null;
      state.userLogin = null;
    },
    setThongTinNguoiDung: (state, action) => {
      state.thongTinNguoiDung = action.payload;
      localStorage.setItem("THONG_TIN_NGUOI_DUNG", JSON.stringify(action?.payload));
    },
    updateUser : (state,action)=>{
      state.successUpdateUser = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  setResponseRegister,
  setErrorRegister,
  dangNhapAction,
  dangXuatAction,
  setThongTinNguoiDung,
  updateUser
} = userManagermentReducer.actions;

export default userManagermentReducer.reducer;

//api action

export const registerActionApi = (thongTinDangKy) => {
  return async (dispatch) => {
    try {
      const res = await userManagermentService.dangKy(thongTinDangKy);
      if (res.data.statusCode === STATUS_CODE.SUCCESS) {
        dispatch(setResponseRegister(res.data.content));
      }
    } catch (error) {
      dispatch(setErrorRegister(error));
    }
  };
};

export const loginActionApi = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await userManagermentService.dangNhap(thongTinDangNhap);
      dispatch(dangNhapAction(result.data.content));
    } catch (error) {
      console.log("error login", error);
      dispatch(dangNhapAction(null));
    }
  };
};

export const layThongTinNguoiDungApi = () => {
  return async (dispatch) => {
    try {
      const result = await userManagermentService.layThongTinNguoiDung();
      dispatch(setThongTinNguoiDung(result.data?.content));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateThongTinUser = (user)=>{
  return async (dispatch) =>{
    try {
      const result = await userManagermentService.postCapNhapThongTinNguoiDung(user)
      dispatch(updateUser(result.data?.content))
    } catch (error) {
      dispatch(updateUser(null))
    }
  }
}
