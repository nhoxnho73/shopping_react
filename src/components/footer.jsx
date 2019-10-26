import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
          <div id="bt-top" className="buttom-img">
            <a href="true"><img src="./image/ic-gototop.png" alt=""/></a>
          </div>
          <div className="block-footer">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <div className="block-info">
                    <h4>CÔNG TY TNHH MỘT THÀNH VIÊN ANTANA FOOD</h4>
                    <ul className="block-list">
                      <li>
                        <div className="icon-img"><img src="./image/ic-location.png" alt="" /></div>
                        <div className="address"><span>Tầng 8, Toà nhà Lam Giang </span><br /><span>167-173 Trần Hưng Đạo, Cô Giang, Quận 1, TP.HCM</span></div>
                      </li>
                      <li>
                        <div className="icon-img"><img src="./image/ic-call.png" alt=""/></div>
                        <div className="address"><span>(+84)287 3088 113 - Hotline:0901 477 638</span> </div>
                      </li>
                      <li>
                        <div className="icon-img"><img src="./image/ic-email.png" alt=""/></div>
                        <div className="address"><a href="true">info@antana.com.vn</a></div>
                      </li>
                      <li>
                        <div className="icon-img"><img src="./image/ic-wwww.png" alt=""/></div>
                        <div className="address"><a href="true">www.antana.com.vn</a></div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="block-contact">
                    <div className="contact-menu">
                      <h4>VỀ ANTANA FOOD</h4>
                      <ul className="block-contact-list">
                        <li><a href="true">Giới thiệu</a></li>
                        <li><a href="true">Quy trình sản xuất</a></li>
                      </ul>
                    </div>
                    <div className="contact-menu">
                      <h4>SẢN PHẨM</h4>
                      <ul className="block-contact-list">
                        <li><a href="true">Trái cây sấy khô</a></li>
                        <li><a href="true">Hạt sấy khô</a></li>
                        <li><a href="true">Hải sản sấy khô</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="block-form">
                    <h4>LIÊN HỆ</h4>
                    <div className="block-body">
                      <form action="#" className="block-form">
                        <input type="text" placeholder="Họ tên" />
                        <input type="text" placeholder="Số điện thoại" />
                        <input type="email" placeholder="Email" />
                      </form>
                      <ul className="block-social">
                        <li><a href="true"><img src="./image/ic-sc1.png" alt=""/></a></li>
                        <li><a href="true"><img src="./image/ic-sc2.png" alt=""/></a></li>
                        <li><a href="true"><img src="./image/ic-sc3.png" alt=""/></a></li>
                        <li><a href="true"><img src="./image/ic-sc4.png" alt=""/></a></li>
                        <li><a href="true"><img src="./image/ic-sc5.png" alt=""/></a></li>
                      </ul>
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

export default Footer;