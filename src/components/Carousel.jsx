import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';


class Carousel extends Component {
  render() {
    return(
      <div className="block-carousel-footer">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div className="block-title">
            <img className="img-size-5" src="./image/partner.png" alt=""/>
          </div>
        </div>
      </div>
      <OwlCarousel 
        className="owl-theme"
        items="9"
        autoplay
        loop
      >

        <div className="item">
          <img src="./image/about/ic-logo1.jpg" alt=""/>
        </div>
        <div className="item">
          <img src="./image/about/ic-logo2.jpg" alt=""/>
        </div>
        <div className="item">
          <img src="./image/about/ic-logo3.jpg" alt=""/>
        </div>
        <div className="item">
          <img src="./image/about/ic-logo4.jpg" alt=""/>
        </div>
        <div className="item">
          <img src="./image/about/ic-logo5.jpg" alt=""/>
        </div>
        <div className="item">
          <img src="./image/about/ic-logo6.jpg" alt=""/>
        </div>
        <div className="item">
          <img src="./image/about/ic-logo7.jpg" alt=""/>
        </div>
        <div className="item">
          <img src="./image/about/ic-logo8.jpg" alt=""/>
        </div>
        <div className="item">
          <img src="./image/about/ic-logo9.jpg" alt=""/>
        </div>
      </OwlCarousel>
    </div>
    )
  }
}

export default Carousel;
