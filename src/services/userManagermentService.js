import { baseService } from "./baseServices";

export class UserManagermentService extends baseService {
    constructor(){
        super()
    }

    dangKy = (thongTinDangKy) => {
        // {taiKhoan:'',matKhau:''}
        return this.post(`/api/QuanLyNguoiDung/DangKy`, thongTinDangKy);
    };
    dangNhap = (thongTinDangNhap) => {
        // {taiKhoan:'',matKhau:''}
        return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
    };
    
  layThongTinNguoiDung = () => {
    return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`);
  };
  postCapNhapThongTinNguoiDung = (user) => {
    return this.post(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, user);
  };
}

export const userManagermentService = new UserManagermentService()