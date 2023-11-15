
import { GPID } from "../utils/settings/config";
import { baseService } from "./baseServices";

export class QuanLyPhimService extends baseService{
    constructor(){
        super();
    }

    layDanhSachBanner = ()=>{
        return this.get("/api/QuanLyPhim/LayDanhSachBanner");
    }

    layDanhSachPhim = (tenPhim='')=>{
        if(tenPhim!==""){
            return this.get(`/api/QuanLyPhim/LayDanhSachPhim&tenPhim=${tenPhim}`)
        }else{
            return this.get("/api/QuanLyPhim/LayDanhSachPhim")
        }
       
    }

    themPhimUploadHinh = (formData) => {
        return this.post(`/api/QuanLyPhim/ThemPhimUploadHinh`,formData);
    } 

    layThongTinPhim = (maPhim) => {
        return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
    }
    
    capNhatPhimUpload = (formData) => {
        return this.post(`/api/QuanLyPhim/CapNhatPhimUpload`,formData);
    }


    xoaPhim = (maPhim) => {
        return this.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
    }
    
    
}
export const quanLyPhimService = new QuanLyPhimService()

