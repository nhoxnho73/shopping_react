import React, {Component} from 'react';

class Seed extends Component {
  render() {
    return(
      <div className="col-md-4">
        <div className="product--item">
          <div className="product-item--box">
            <div className="product-item-box--image">
                <img src="./image/seed/im2.jpg" alt=""/>
            </div>
            <div className="product-item-box--infor">
              <h4>HẠT ĐIỀU SẤY KHÔ</h4>
            </div>
            <a className="btn btn-danger" href="true" >MUA NGAY</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Seed;