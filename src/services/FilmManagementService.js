import { baseService } from "./baseServices";

export class FilmManagementService extends baseService {
    constructor(){
        super()
    }

    layDanhSachFilm(){
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim`)
    }
}

export const filmManagementService = new FilmManagementService()