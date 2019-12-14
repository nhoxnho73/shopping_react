import React, {Component} from 'react';

class Cart extends Component {
  render() {
    return (
      <div>
        <div className="gio_hang">
          <div className="container">
            <div className="row">
              <div className="col-md-6 block-1">
                <div className="gio-hang-title">
                  <h4>GIỎ HÀNG</h4>
                  <p>Số lượng(2)</p>
                </div>
                <hr />
                <div className="border-gio-hang-1">
                  <h6>XOÀI SẤY</h6>
                  <div className="border-gio-hang-2">
                    <div className="head">
                      <img src="./image/cart/im3.png" alt=""/>
                    </div>
                    <div className="body">
                      <input type="number" defaultValue={1} />
                    </div>
                    <div className="footer">
                      <a href="true"><img src="./image/cart/ic-delete.png" alt=""/></a>
                    </div>
                  </div>
                </div>
                <div className="border-gio-hang-1">
                  <h6>HẠT ĐIỀU RANG MUỐI KHÔNG VỎ HỦ PET 250G</h6>
                  <div className="border-gio-hang-2">
                    <div className="head">
                      <img src="./image/cart/im2.png" alt=""/>
                    </div>
                    <div className="body">
                      <input type="number" defaultValue={1} />
                    </div>
                    <div className="footer">
                      <a href="true"><img src="./image/cart/ic-delete.png" alt=""/></a>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="button-footer">
                  <a href="true" className="btn btn-1">MUA TIẾP</a>
                  <a href="true" className="btn btn-2">XOÁ TẤT CẢ</a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="detail-head">
                  <ul>
                    <li><a href="true"><img src="./image/product/ic-TraiCay.png" alt=""/></a></li>
                    <li><a href="true"><img src="./image/product/ic-hat.png" alt=""/></a></li>
                    <li><a href="true"><img src="./image/product/ic-ca.png" alt=""/></a></li>
                  </ul>
                </div>
                <div className="detail-footer">
                  <p>HOTLINE: <span>1900 636 351</span></p>
                  <ul className="second-menu-list">
                    <li><a href="true"><i className="fa fa-facebook" /></a></li>
                    <li><a href="true"><i className="fa fa-twitter" /></a></li>
                    <li><a href="true"><i className="fa fa-google-plus" /></a></li>
                    <li><a href="true"><i className="fa fa-instagram" /></a></li>
                    <li><a href="true"><i className="fa fa-youtube-play" /></a></li>
                  </ul>
                </div>
                <div className="border-form">
                  <form className="form-gio-hang">
                    <input type="text" placeholder="Tên" />
                    <input type="text" placeholder="Điện thoại" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Địa chỉ" />
                    <textarea placeholder="Yêu cầu khác" rows={5} defaultValue={""} />
                  </form>
                  <a href="true" className="btn">
                    THANH TOÁN
                  </a>
                </div>
              </div>
            </div>
            <div className="row gio-hang-text">
              <div className="col-md-10 mx-auto">
                <div className="gio-hang-text-title">
                  <img src="./image/hot_product.png" alt=""/>
                </div>
              </div>
              <div className="owl-carousel owl-carousel-3 owl-theme owl-loaded">
                <div className="owl-stage-outer">
                  <div className="owl-stage">
                    <div className="owl-item">
                      <div className="sea-food-main">
                        <div className="sea-food-left"><a href="true"><img src="./image/product/im2.png" alt=""/></a></div>
                        <div className="sea-food-right">
                          <h6><a href="true">HẠT ĐIỀU RANG MUỐI 250G</a></h6>
                          <a href="true" className="btn">MUA NGAY</a>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item">
                      <div className="sea-food-main">
                        <div className="sea-food-left"><a href="true"><img src="./image/product/im3.png" alt=""/></a></div>
                        <div className="sea-food-right">
                          <h6><a href="true">XOÀI SẤY 250G</a></h6>
                          <a href="true" className="btn">MUA NGAY</a>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item">
                      <div className="sea-food-main">
                        <div className="sea-food-left"><a href="true"><img src="./image/product/im4.png" alt=""/></a></div>
                        <div className="sea-food-right">
                          <h6><a href="true">KHOAI LANG SẤY 250G</a></h6>
                          <a href="true" className="btn">MUA NGAY</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Cart;