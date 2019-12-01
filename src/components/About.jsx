import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div>
        <div className="about">
          <div className="container">
            <div className="img-title-about">
              <img src="./image/about/intro-text.png" alt=""/>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-6">
                <div className="img-about">
                  <img src="./image/about/im1.png" alt=""/>
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="content-about-1">
                  <h4>PHƯƠNG CHÂM<br /><span>HOẠT ĐỘNG</span></h4>
                  <p>
                    Với khách hàng: Antana Food là công ty cung cấp các sản phẩn hạt điều ăn liền,
                    hạt điều rang muối, hạt điều vỏ lụa rang muối, hạt điều nhân trắng chất lượng cao,
                    đảm bảo an toàn vệ sinh thực phẩm.
                    Với tập thể: Antana Food là công ty có môi trường làm việc thân thiện, luôn vì tập thể chung, 
                    và tất cả lợi ích của khách hàng
                    Sự phát triển của Antana Food: sẽ là một tập đoàn sản xuất lớn mạnh, không những ở thị trường Việt Nam, mà còn vương xa các thị trường trên thế giới,
                    trở thành công ty xuất khẩu hạt điều toàn cầu.
                    Với phương châm hoạt động trên, Antana food mong muốn trở thành đối tác quan trọng đối với các đơn vị liên doanh, cũng như là một tập đoàn uy tính đối với
                    khách hàng. Antana Food cùng với đội ngũ nhân viên dày dạn kinh nghiệm, phong cách làm việc chuyên nghiệp sẽ luôn phấn đấu để đạt được mục tiêu đó của mình.
                  </p>
                </div>
              </div>
            </div>
            {/*----------------------------------------------------------------------------------*/}
            <div className="row">
              <div className="col-sm-6 col-md-6">
                <div className="content-about-2">
                  <h4>PHƯƠNG CHÂM<br /><span>CHIẾN LƯỢC</span></h4>
                  <p>
                    Antana trở thành công ty sản xuất hạt điều hàng đầu tại Việt Nam trong lĩnh vực chế biến hạt điều rang muối,
                    hạt điều võ lụa rang muối ăn liền, hạt điều nhân trắng chất lượng cao.
                    Công ty hạt điều Antana Food sẽ cung cấp giá thành sản phẩm cạnh tranh nhất để người dân việt nam có thể sử dụng
                    hạt điều một sản phẩm bổ dưỡng toàn diện.
                  </p>
                  <h6>CÁC QUỐC GIA<br /> ANTANA XUẤT KHẨU</h6>
                  <ul className="contry-list">
                    <li><span>NHẬT BẢN</span></li>
                    <li><span>UAE</span></li>
                    <li><span>HONGKONG</span></li>
                    <li><span>ĐÀI LOAN</span></li>
                    <li><span>TRUNG QUỐC</span></li>
                    <li><span>SINGAPORE</span></li>
                    <li><span>BANGLADESH</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="img-about">
                  <img src="./image/about/im2.png" alt=""/>
                </div>
              </div>
            </div>
            {/*----------------------------------------------------------------------------------*/}
            <div className="row">
              <div className="col-sm-6 col-md-6">
                <div className="img-about">
                  <img src="./image/about/im3.png" alt=""/>
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="content-about-3">
                  <h4>CAM KẾT<br /><span>CỦA CHÚNG TÔI</span></h4>
                  <p>
                    Cam kết cung cấp cho khách hàng sản phẩm hạt điều chất lượng cao, đảm an toàn vệ sinh thực phẩm theo phong cách chuyên nghiệp
                    Tôn trọng các nguyên tắc đạo đức nghề nghiệp và đạo đức kinh doanh.
                    Đào tạo và xây dựng đội ngũ nhân viên có chuyên môn và năng lực giỏi để nâng cao chất lương sản phẩm đồng thời phục vụ khách hàng trong tiến trình phát triển
                    và hội nhập toàn cầu tạo môi trường làm việc chuyên nghiệp và thân thiện. Tạo sự khác biệt trong các sản phẩm bằng việc luôn cải tiến chất lượng, giá thành cạnh tranh.
                    Ứng dụng công nghệ thông tin trong mọi hoạt động sản xuất và kinh doanh. Phấn đấu đem lại lợi ích cao nhất cho khách hàng, nhân viên và cộng đồng xã hội.
                  </p>
                </div>
              </div>
            </div>
            {/*----------------------------------------------------------------------------------*/}
            <div className="block-carousel-footer">
              <div className="row">
                <div className="col-md-10 mx-auto">
                  <div className="block-title">
                    <img className="img-size-5" src="./image/about/partner.png" alt=""/>
                  </div>
                </div>
              </div>
              <div className="owl-carousel owl-carousel-2 owl-theme owl-loaded">
                <div className="owl-stage-outer">
                  <div className="owl-stage">
                    <div className="owl-item">
                      <div className="item">
                        <img src="./image/about/ic-logo1.jpg" alt=""/>
                      </div>
                    </div>
                    <div className="owl-item">
                      <div className="item">
                        <img src="./image/about/ic-logo2.jpg" alt=""/>
                      </div>
                    </div>
                    <div className="owl-item">
                      <div className="item">
                        <img src="./image/about/ic-logo3.jpg" alt=""/>
                      </div>
                    </div>
                    <div className="owl-item">
                      <div className="item">
                        <img src="./image/about/ic-logo4.jpg" alt=""/>
                      </div>
                    </div>
                    <div className="owl-item">
                      <div className="item">
                        <img src="./image/about/ic-logo5.jpg" alt=""/>
                      </div>
                    </div>
                    <div className="owl-item">
                      <div className="item">
                        <img src="./image/about/ic-logo6.jpg" alt=""/>
                      </div>
                    </div>
                    <div className="owl-item">
                      <div className="item">
                        <img src="./image/about/ic-logo7.jpg" alt=""/>
                      </div>
                    </div>
                    <div className="owl-item">
                      <div className="item">
                        <img src="./image/about/ic-logo8.jpg" alt=""/>
                      </div>
                    </div>
                    <div className="owl-item">
                      <div className="item">
                        <img src="./image/about/ic-logo9.jpg" alt=""/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*----------------------------------------------------------------------------------*/}
          </div>
        </div>
      </div>
    );
  }
}

export default About;