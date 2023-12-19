import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import _ from "lodash"
import './Checkout.scss'
import { datVe, datVeAction, quanLyDatVeActionApi } from '../../redux/reducers/DatVeReducer'
import { CheckOutlined, CloseOutlined, UserOutlined ,SmileOutlined,HomeOutlined} from '@ant-design/icons'

export default function Checkout() {
    const navigate = useNavigate()
  const {userLogin} = useSelector(state => state.userManagermentReducer)
  const params = useParams();
  let {id} = params
  console.log("id đặt vé ",id);
    const dispatch = useDispatch()
  useEffect(()=>{
    if(userLogin){
        dispatch(quanLyDatVeActionApi(id))
    }
    else{
        navigate("/login")
    }
  },[])

  const {chiTietPhongVe,danhSachGheDangDat,danhSachGheKhachDat} = useSelector(state => state.datVeReducer)
    const {thongTinPhim,danhSachGhe} = chiTietPhongVe
  console.log("chi tiết",chiTietPhongVe);

  const renderSeats = () => {
    return danhSachGhe?.map((ghe, index) => {

        let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
        let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
        let classGheDangDat = '';

        //Kiểm tra từng ghế render xem có trong mảng ghế đang đặt hay không
        let indexGheDD = danhSachGheDangDat?.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);

        if (indexGheDD != -1) {
            classGheDaDat = 'gheDangDat';
        }

        // //Kiểm tra từng render xem có phải ghế khách đặt hay không
        let classGheKhachDat = '';
        let indexGheKD = danhSachGheKhachDat?.findIndex(gheKD => gheKD.maGhe === ghe.maGhe);
        if(indexGheKD !== -1){
            classGheKhachDat = 'gheKhachDat';
        }
        let classGheDaDuocDat = '';
        if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
            classGheDaDuocDat = 'gheDaDuocDat';
        }




        return <Fragment key={index}>
            <button onClick={() => {
                dispatch(datVe(ghe))
            }}  disabled={ghe.daDat || classGheKhachDat !=='' } className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat} ${classGheKhachDat} text-center`} key={index}>
{ghe.daDat  ? classGheDaDuocDat != '' ? <UserOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> : <CloseOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> : classGheKhachDat !=='' ? <SmileOutlined  style={{ marginBottom: 7.5, fontWeight: 'bold' }} />  :  ghe.stt}
            </button>
            {(index +1) % 16 === 0 ? <br /> : ''}
        </Fragment>
    })
}

return (
  <div className=" min-h-screen mb-4" >
  <div className="grid grid-cols-12">
      <div className="col-span-9 mt-4">
          <div className="flex flex-col items-center ">
              <div className="bg-black " style={{ width: '80%', height: 15 }}>
              </div>
              <div className="trapezoid text-center" >
                  <h3 className="mt-3 text-black">Màn hình</h3>
              </div>
              <div>
                  {renderSeats()}
              </div>
          </div>

          <div className="mt-5 flex justify-center">
              <table className=" divide-y divide-gray-200 ">
                  <thead className="bg-gray-50 p-5">
                      <tr>
                          <th style={{paddingRight:"10px"}}>Ghế chưa đặt</th>
                          <th style={{paddingRight:"10px"}}>Ghế đang đặt</th>
                          <th style={{paddingRight:"10px"}}>Ghế vip</th>
                          <th style={{paddingRight:"10px"}}>Ghế đã đặt</th>
                          <th style={{paddingRight:"10px"}}>Ghế mình đặt</th>
                          <th >Ghế khách đang đặt</th>
                      </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                          <td><button className="ghe text-center" >  </button> </td>
                          <td><button className="ghe gheDangDat text-center pl-2"> </button> </td>
                          <td><button className="ghe gheVip text-center pl-2"></button> </td>
                          <td><button className="ghe gheDaDat text-center pl-2">  </button> </td>
                          <td><button className="ghe gheDaDuocDat text-center pl-2">  </button> </td>
                          <td><button className="ghe gheKhachDat text-center">  </button> </td>
                          {/* <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> */}
                      </tr>
                  </tbody>
              </table>
          </div>

      </div>
      <div className="col-span-3 datVe_thanhToan">
          <h3 className="text-green-400 text-center text-4xl mb-3">{danhSachGheDangDat?.reduce((tongTien, ghe, index) => {
              return tongTien += ghe.giaVe;
          }, 0).toLocaleString()} đ</h3>
  
          <hr />

          <h3 className="text-xl mt-3">{thongTinPhim?.tenPhim}</h3>
          
          <p>Địa điểm: {thongTinPhim?.tenCumRap} -{thongTinPhim?.tenRap}</p>
          <p className='mb-3'>Ngày chiếu: {thongTinPhim?.ngayChieu} {thongTinPhim?.gioChieu}</p>
          <hr />
          <div className="flex flex-row my-3">
              <div className="w-4/5">
                  <span className="text-red-400 text-lg">Ghế</span>

                  {_.sortBy(danhSachGheDangDat, ['stt'])?.map((gheDD, index) => {
                      return <span key={index} className="text-green-500 text-xl"> {gheDD.stt}</span>
                  })}
              </div>

              <div className="text-right col-span-1">
                  <span className="text-green-800 text-lg">
                      {danhSachGheDangDat?.reduce((tongTien, ghe, index) => {
                          return tongTien += ghe.giaVe;
                      }, 0).toLocaleString()}
                  </span>
              </div>
          </div>
          <hr />
          <div className="my-3">
              <i>Email</i> <br />
              {userLogin?.email}
          </div>
          <hr />
          <div className="my-3">
              <i>Phone</i> <br />
              {userLogin?.soDT}
          </div>
          <hr />
          <div className="mb-0 h-full flex flex-col items-center" style={{ marginBottom: 0 }}             onClick={() => {
                  const thongTinDatVe = {
                      maLichChieu:id,
                      danhSachVe:danhSachGheDangDat
                  }

                  dispatch(datVeAction(thongTinDatVe));
                  navigate("/")


              }}>

              <div  className="bg-green-500 text-white w-full text-center py-3 font-bold text-2xl cursor-pointer">
                  ĐẶT VÉ
              </div>
          </div>
      </div>
  </div>
</div>
)
}
