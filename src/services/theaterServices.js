import { baseService } from "./baseServices";

export class TheaterService extends baseService {
    constructor(){
        super()
    }

    getThongTinLichChieuPhim(maPhim)  {
        const path = `/api/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`;
        return this.get(path)
      }
}

export const theaterService = new TheaterService()