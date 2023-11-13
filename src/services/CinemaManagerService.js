
import { baseService } from "./baseServices";

export class CinemaManagementService extends baseService {
  constructor() {
    super();
  }

  layThongTinLichChieuRap = () => {
    return this.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap`
    );
  };
  layThongTinLichChieuPhim = (maPhim) => {
    return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
  };

}
export const cinemaManagementService = new CinemaManagementService();