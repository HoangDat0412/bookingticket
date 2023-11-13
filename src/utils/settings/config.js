export const DOMAIN = "http://movieapi.cyberlearn.vn";
export const TOKEN = "accessToken";
export const USER_LOGIN = "USER_LOGIN";
export const STATUS_CODE = {
    SUCCESS: 200,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
  };

export const GPID = "GP02";
const currentUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;