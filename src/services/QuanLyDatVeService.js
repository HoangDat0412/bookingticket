
import { baseService } from './baseServices'

export class QuanLyDatVeService extends baseService {
    constructor() {
        super()
    }

    layChiTietPhongVe= (maLichChieu)=>{
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    }

    DatVe = (thongTinDatVe) => {
        return this.post(`/api/QuanLyDatVe/DatVe`, thongTinDatVe);
      };


}

export const quanLyDatVeService = new QuanLyDatVeService();

