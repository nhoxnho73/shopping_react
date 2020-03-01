import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

class MoreProduct extends Component {
  render() {
    return(
      <div className="block-carousel-footer">
        <div className="row gio-hang-text">
          <div className="col-md-10 mx-auto">
            <div className="gio-hang-text-title">
              <img className="img-size-5" src="./image/hot_product.png" alt=""/>
            </div>
          </div>
        </div>
        <OwlCarousel 
          className="owl-theme"
          items="3"
          // autoplay
          // loop
        >
          <div className="sea-food-main">
            <div className="sea-food-left"><a href="true"><img src="./image/master/im2.jpg" alt=""/></a></div>
            <div className="sea-food-right">
              <h6><a href="true">HẠT ĐIỀU RANG MUỐI 250G</a></h6>
              <a href="true" className="btn">MUA NGAY</a>
            </div>
          </div>
          <div className="sea-food-main">
            <div className="sea-food-left"><a href="true"><img src="./image/master/im3.jpg" alt=""/></a></div>
            <div className="sea-food-right">
              <h6><a href="true">XOÀI SẤY 250G</a></h6>
              <a href="true" className="btn">MUA NGAY</a>
            </div>
          </div>
          <div className="sea-food-main">
            <div className="sea-food-left"><a href="true"><img src="./image/master/im4.jpg" alt=""/></a></div>
            <div className="sea-food-right">
              <h6><a href="true">KHOAI LANG SẤY 250G</a></h6>
              <a href="true" className="btn">MUA NGAY</a>
            </div>
          </div>
        </OwlCarousel>
    </div>
    )
  }
}

export default MoreProduct;
