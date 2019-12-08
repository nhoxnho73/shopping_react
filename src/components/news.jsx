import React, {Component} from 'react';

class News extends Component {
  render() {
    return(
      <div>
        <div className="news">
          <div className="container">
            <div className="img-head-news">
              <img src="./image/news/text-news.png" alt=""/>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="img-news-border">
                  <img src="./image/news/im1.jpg" alt=""/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="content-news-border">
                  <h4>NHỮNG LỢI ÍCH TUYỆT VỜI</h4>
                  <h5>CỦA HẠT ĐIỀU ANTANA FOOD</h5>
                  <p>
                    Các nghiên cứu củng cho thấy rằng hạt điều Antana Food làm giảm nguy cơ ung thư ruột già. Hàm lương đồng chứa trong hạt
                    điều cao là nguồn chính tạo nên sức mạnh để loại bỏ các gốc tự do. Hạt điều còn có chất phytochemical và các chất chống
                    Oxi hoá giúp ngăn ngừa thả năng ung thư. Chất proanthocyannidins trong hạt điều có tính năng cô lập các khối u và ngăn chặn các tế bào ung thư phân chia.                  </p>
                  <div className="content-buttom">
                    <a href="true" className="btn">MUA NGAY</a>
                  </div>
                </div>
              </div>
            </div>
            {/*-------------------------------------------------------------------------------------------------*/}
            <div className="news-infor">
              <div className="row">
                <div className="col-xs-12 col-md-6 col-lg-4">
                  <div className="news-discription">
                    <div className="news-title">
                      <a href="true"><img src="./image/news/im2.jpg" alt=""/></a>
                      <hr className="color-1" />
                    </div>
                    <div className="news-body">
                      <h4><a href="true">TÌM HIỂU HẠT ĐIỀU VÀ HẠT ĐIỀU ANTANA</a></h4>
                      <p>Cashew Nut có rất nhiều lợi ích. Những lợi ích sức khoẻ của hạt điều bao gồm một trái tim khoẻ mạnh</p>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-4">
                  <div className="news-discription">
                    <div className="news-title">
                      <a href="true"><img src="./image/news/im3.jpg" alt=""/></a>
                      <hr className="color-2" />
                    </div>
                    <div className="news-body">
                      <h4><a href="true">HƯỚNG DẪN LÀM BÁNH HẠT ĐIỀU THƠM NGON TẠI NHÀ</a></h4>
                      <p>Hạt điều Cashew Nut có rất nhiều lợi ích. Những lợi ích sức khoẻ của hạt điều bao gồm một trái tim khoẻ mạnh</p>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-4">
                  <div className="news-discription">
                    <div className="news-title">
                      <a href="true"><img src="./image/news/im4.jpg" alt=""/></a>
                      <hr className="color-3" />
                    </div>
                    <div className="news-body">
                      <h4><a href="true">CASHEW NUT-ANTANA FOOD</a></h4>
                      <p>Hạt điều Cashew Nut có rất nhiều lợi ích. Những lợi ích sức khoẻ của hạt điều bao gồm một trái tim khoẻ mạnh</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-md-6 col-lg-4">
                  <div className="news-discription">
                    <div className="news-title">
                      <a href="true"><img src="./image/news/im5.jpg" alt=""/></a>
                      <hr className="color-1" />
                    </div>
                    <div className="news-body">
                      <h4><a href="true">TÌM HIỂU HẠT ĐIỀU VÀ HẠT ĐIỀU ANTANA</a></h4>
                      <p>Cashew Nut có rất nhiều lợi ích. Những lợi ích sức khoẻ của hạt điều bao gồm một trái tim khoẻ mạnh</p>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-4">
                  <div className="news-discription">
                    <div className="news-title">
                      <a href="true"><img src="./image/news/im6.jpg" alt=""/></a>
                      <hr className="color-2" />
                    </div>
                    <div className="news-body">
                      <h4><a href="true">HƯỚNG DẪN LÀM BÁNH HẠT ĐIỀU THƠM NGON TẠI NHÀ</a></h4>
                      <p>Hạt điều Cashew Nut có rất nhiều lợi ích. Những lợi ích sức khoẻ của hạt điều bao gồm một trái tim khoẻ mạnh</p>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-4">
                  <div className="news-discription">
                    <div className="news-title">
                      <a href="true"><img src="./image/news/im7.jpg" alt=""/></a>
                      <hr className="color-3" />
                    </div>
                    <div className="news-body">
                      <h4><a href="true">CASHEW NUT-ANTANA FOOD</a></h4>
                      <p>Hạt điều Cashew Nut có rất nhiều lợi ích. Những lợi ích sức khoẻ của hạt điều bao gồm một trái tim khoẻ mạnh</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="next-page">
                <ul className="list-page">
                  <li><a href="true" className="btn"><i className="fa fa-chevron-left" /><i className="fa fa-chevron-left" /></a></li>
                  <li><a href="true" className="btn"><i className="fa fa-chevron-left" /></a></li>
                  <li><a href="true" className="number">1</a></li>
                  <li><a href="true" className="number">2</a></li>
                  <li><a href="true" className="number">3</a></li>
                  <li><a href="true" className="number">...</a></li>
                  <li><a href="true" className="number">9</a></li>
                  <li><a href="true" className="btn"><i className="fa fa-chevron-right" /></a></li>
                  <li><a href="true" className="btn"><i className="fa fa-chevron-right" /><i className="fa fa-chevron-right" /></a></li>
                </ul>
              </div>
            </div>
            {/*-------------------------------------------------------------------------------------------------*/}
            {/*----------------------------------------------------------------------------------*/}
            <div className="block-carousel-footer">
              <div className="row">
                <div className="col-md-10 mx-auto">
                  <div className="block-title">
                    <img className="img-size-5" src="./image/partner.png" alt=""/>
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
    ) 
  }
}
export default News;
