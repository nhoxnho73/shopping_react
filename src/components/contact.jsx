import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <div className="contact">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <p className="text-title">Nếu bạn có khắc mắc vui lòng để lại thông tin bên dưới. Chúng tô sẽ hỗ trợ bạn trong thời gian sớm nhất</p>
              </div>
              <div className="col-md-5">
                <div className="title-img">
                  <img src="./image/contact/text-LienHe.png" alt=""/>
                </div>
              </div>
            </div>
            <div className="img-map-contact">
              <div className="row">
                <div className="col-md-6">
                  <h4>HOTLINE:<span> 1900 636 351</span></h4>
                  <div className="img-map-content">
                    <img src="./image/contact/ic-call.png" alt=""/>
                    <h5>ĐIỆN THOẠI</h5>
                    <p>(+84) 287 3088113</p>
                  </div>
                  <div className="img-map-content">
                    <img src="./image/contact/ic-info.png" alt=""/>
                    <h5>EMAIL</h5>
                    <p>info@antana.com.vn</p>
                  </div>
                  <div className="img-map-content">
                    <img src="./image/contact/ic-map.png" alt=""/>
                    <h5>ĐỊA CHỈ</h5>
                    <p>Tầng 8, Toà nhà Lam Giang 167-173 Trần Hưng Đạo, Cô Giang, Quận 1, TP.HCM</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <form action="#" className="form-contact">
                    <div className="form-border">
                      <input type="text" placeholder="Tên" />
                      <input type="text" placeholder="Điện thoại" />
                      <input type="email" placeholder="Email" />
                      <input type="text" placeholder="Địa chỉ" />
                      <input type="text" placeholder="Chủ đề" />
                      <textarea name="description" rows={8} placeholder="Nội dung" defaultValue={""} />
                      <textarea name="code" rows={4} placeholder="Mã xác nhận" defaultValue={""} />
                      <button className="btn btn-primary">Gửi</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="google-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31328.49898390409!2d106.61210572650585!3d11.033947269925468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d1f55bb350cf%3A0xbf95524da60c926!2zSGnhu4dwIEFuLCBUcC4gVGjhu6cgROG6p3UgTeG7mXQsIELDrG5oIETGsMahbmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1550286167771" width={600} height={450} frameBorder={0} style={{border: 0}} title="antana-map" allowFullScreen ></iframe>
        </div>
      </div> 
    );
  }
}

export default Contact;
