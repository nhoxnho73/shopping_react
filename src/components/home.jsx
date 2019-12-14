import React, {Component} from 'react';
import Carousel from './Carousel';

class Home extends Component {
  render() {
    return(
      <div>
        <div className="menu-img">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <div className="border-menu-img">
                  <a href="true"><img src="./image/product/product-hai-san.png" alt=""/></a>
                  <div className="img-content">
                    <h4>HẢI SẢN</h4>
                    <span>Sấy khô</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="border-menu-img">
                  <a href="true"><img src="./image/product/product-hat-dieu.png" alt=""/></a>
                  <div className="img-content">
                    <h4>HẠT</h4>
                    <span>Sấy khô</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="border-menu-img">
                  <a href="true"><img src="./image/product/product-trai-cay.png" alt=""/></a>
                  <div className="img-content">
                    <h4>TRÁI CÂY</h4>
                    <span>Sấy khô</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block-index">
          <div className="container">
            <div className="product-new">
              <div className="row">
                <div className="col-md-10 mx-auto">
                  <div className="block-title">
                    <img className="img-size-1" src="./image/new_product.png" alt=""/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-4">
                  <div className="block-border">
                    <div className="img-head">
                      <img src="./image/master/im2.jpg" alt=""/>
                    </div>
                    <div className="img-body">
                      <h4>HẠT ĐIỀU RANG MUỐI LON 150G</h4>
                      <p>Quy trình chế biến hiện đại cải thiện tối đa nhược điểm phương pháp rang truyền thống, giữ lại hương vị tự nhiên thơm ngon nhất.</p>
                    </div>
                    <div className="img-footer">
                      <button className="btn">MUA NGAY</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="block-border">
                    <div className="img-head">
                      <img src="./image/master/im3.jpg" alt=""/>
                    </div>
                    <div className="img-body">
                      <h4>HẠT ĐIỀU VỎ LỤA RANG MUỐI HŨ PET 220G</h4>
                      <p>Được chế biến từ hạt điều nguyên hạt trên dây chuyền công nghệ cao của Antana Food tạo nên sản phẩm HẠT ĐIỀU...</p>
                    </div>
                    <div className="img-footer">
                      <button className="btn">MUA NGAY</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="block-border">
                    <div className="img-head">
                      <img src="./image/master/im4.jpg" alt=""/>
                    </div>
                    <div className="img-body">
                      <h4>HẠT ĐIỀU RANG MUỐI HỘP QUÀ 450G</h4>
                      <p>Hạt điều là một loại hạt dinh dưỡng chứa rất nhiều chất có lợi cho sức khoẻ và tim mạch. Một món quà mang hàm ý đề cao và bảo vệ sức khoả cho người...</p>
                    </div>
                    <div className="img-footer">
                      <button className="btn">MUA NGAY</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*----------------------------------------------------------------------------------*/}
            <div className="information">
              <div className="row">
                <div className="col-md-6">
                  <div className="information-img">
                    <img className="img-size-2" src="./image/im1.png" alt=""/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="information-content">
                    <h2>HẠT SACHI</h2>
                    <span>Ông vua của các loại hạt</span>
                    <p className="infor-text">
                      So với các loại cây lấy dầu khác Sachi có hàm lượng Omega cao nhất, đặc biệt là Omega3,cao gấp 17 lần dầu cá, gần 50 lần dầu oliu.
                      Sachi được phong tặng là "Dầu ăn tốt nhất trên thế giới", tại Paris(Pháp) năm 2007, được các thị trường khó tính như Mỹ, châu Âu, Nhật Bản săng lùng.
                      Ngoài omega, Sachi còn chứa các chất chống Oxi hoá như Vitamin A và Vitamin E, một số loại axitamin thiết yếu và protein.
                    </p>
                    <p>
                      Đây là các thành phần có vai trò quan trọng trong tái tạo và cải thiện da va tóc, phát triển thể chất và trí tuệ. Chính nhờ những dưỡng chất
                      này mà nó đã soán "ngôi vương" của dầu oliu vốn được coi là một loại dầu thực vật cao cấp nhất từ trước đến nay của loài người.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*----------------------------------------------------------------------------------*/}
            <div className="new-infor">
              <div className="row">
                <div className="col-md-10 mx-auto">
                  <div className="block-title">
                    <img className="img-size-3" src="./image/news.png" alt=""/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="block-border">
                    <div className="img-head">
                      <img src="./image/news/im2.jpg" alt=""/>
                    </div>
                    <div className="img-body">
                      <h4>TÌM HIỂU HẠT ĐIỀU VÀ HẠT ĐIỀU ANTANA</h4>
                      <p>Cashew Nut có rất nhều lợi ích. Những lợi ích sức khoẻ của hạt điều bao gồm một trái tim khoẻ mạnh...</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="block-border">
                    <div className="img-head">
                      <img src="./image/news/im3.jpg" alt=""/>
                    </div>
                    <div className="img-body">
                      <h4>CASHEW NUT ANTANA FOOD HƯỚNG DẪN LÀM BÁNH HẠT ĐIỀU THƠM NGON TẠI NHÀ</h4>
                      <p>Hạt điều - Cashew Nut có rất nhều lợi ích. Những lợi ích sức khoẻ của hạt điều bao gồm một trái tim khoẻ mạnh...</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="block-border">
                    <div className="img-head">
                      <img src="./image/news/im4.jpg" alt=""/>
                    </div>
                    <div className="img-body">
                      <h4>CASHEW NUT - ANTANA FOOD TÌM ĐẠI LÝ HẠT ĐIỀU RANG MUỐI GIÁ SĨ</h4>
                      <p>Hạt điều - Cashew Nut có rất nhều lợi ích. Những lợi ích sức khoẻ của hạt điều bao gồm một trái tim khoẻ mạnh...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*----------------------------------------------------------------------------------*/}
            <div className="product-more">
              <div className="row">
                <div className="col-md-10 mx-auto">
                  <div className="block-title">
                    <img className="img-size-4" src="./image/hot_product.png" alt=""/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="block-border">
                    <div className="img-head">
                      <img src="./image/master/sp1.jpg" alt=""/>
                    </div>
                    <div className="img-body">
                      <h4>TRÁI NHÀU SẤY</h4>
                    </div>
                    <div className="img-footer">
                      <button className="btn">MUA NGAY</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="block-border">
                    <div className="img-head">
                      <img src="./image/master/sp2.jpg" alt=""/>
                    </div>
                    <div className="img-body">
                      <h4>MÍT SẤY</h4>
                    </div>
                    <div className="img-footer">
                      <button className="btn">MUA NGAY</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="block-border">
                    <div className="img-head">
                      <img src="./image/master/sp3.jpg" alt=""/>
                    </div>
                    <div className="img-body">
                      <h4>XOÀI SẤY</h4>
                    </div>
                    <div className="img-footer">
                      <button className="btn">MUA NGAY</button>
                    </div>
                  </div>
                </div>
              </div>
              {/*----------------------------------------------------------------------------------*/}
              <div className="row">
                <div className="col-md-4">
                  <div className="block-border">
                    <div className="img-head">
                      <img src="./image/master/sp1.jpg" alt=""/>
                    </div>
                    <div className="img-body">
                      <h4>HẠT ĐIỀU RANG MUỐI KHÔNG VỎ HỘP ELIP 150G</h4>
                    </div>
                    <div className="img-footer">
                      <button className="btn">MUA NGAY</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="block-border">
                    <div className="img-head">
                      <img src="./image/master/sp2.jpg" alt=""/>
                    </div>
                    <div className="img-body">
                      <h4>HẠT ĐIỀU RANG MUỐI KHÔNG VỎ HŨ PET 220G</h4>
                    </div>
                    <div className="img-footer">
                      <button className="btn">MUA NGAY</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="block-border">
                    <div className="img-head">
                      <img src="./image/master/sp3.jpg" alt=""/>
                    </div>
                    <div className="img-body">
                      <h4>HẠT ĐIỀU RANG MUỐI KHÔNG VỎ TÚI ZIP 65G</h4>
                    </div>
                    <div className="img-footer">
                      <button className="btn">MUA NGAY</button>
                    </div>
                  </div>
                </div>
              </div>
              {/*----------------------------------------------------------------------------------*/}
              <div className="row">
                <div className="col-md-4">
                  <div className="block-border">
                    <div className="img-head-no">
                      <img src="./image/master/sp7.jpg" alt=""/>
                    </div>
                    <div className="img-body">
                      <h4>CÁ CƠM SẤY GIÒN</h4>
                    </div>
                    <div className="img-footer">
                      <button className="btn">MUA NGAY</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="block-border">
                    <div className="img-head">
                      <img src="./image/master/sp8.jpg" alt=""/>
                    </div>
                    <div className="img-body">
                      <h4>CÁ BÒ DA SỢI</h4>
                    </div>
                    <div className="img-footer">
                      <button className="btn">MUA NGAY</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="block-border">
                    <div className="img-head">
                      <img src="./image/master/sp9.jpg" alt=""/>
                    </div>
                    <div className="img-body">
                      <h4>CÁ MAI SẤY</h4>
                    </div>
                    <div className="img-footer">
                      <button className="btn">MUA NGAY</button>
                    </div>
                  </div>
                </div>
              </div>
              {/*----------------------------------------------------------------------------------*/}
            </div>
            <div className="block-map">
              <div className="row">
                <div className="col-sm-4 col-md-4">
                  <div className="map-content">
                    <h2>CÁC QUỐC GIA ANTANA XUẤT KHẨU</h2>
                    <ul>
                      <li>NHẬT BẢN</li>
                      <li>UAE</li>
                      <li>HONGKONG</li>
                      <li>ĐÀI LOAN</li>
                      <li>TRUNG QUỐC</li>
                      <li>SINGAPORE</li>
                      <li>BANGLADESH</li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-8 col-md-8">
                  <div className="map">
                    <img src="./image/about/map.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            {/*----------------------------------------------------------------------------------*/}
            <Carousel/>
            {/*----------------------------------------------------------------------------------*/}
          </div>
        </div>
      </div>
    )
  }
}
export default Home;
