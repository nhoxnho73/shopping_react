import React, {Component} from 'react';
import Slide from './slide';
import { Link } from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <div>
        <div className="block-header">
          <div className="second-menu">
            <div className="container">
              <div className="second-menu-content">
                <ul className="second-menu-list">
                  <li>Hotline:<span> 1900 636 351</span></li>
                  <li><a href="true"><i className="fa fa-facebook" /></a></li>
                  <li><a href="true"><i className="fa fa-twitter" /></a></li>
                  <li><a href="true"><i className="fa fa-google-plus" /></a></li>
                  <li><a href="true"><i className="fa fa-instagram" /></a></li>
                  <li><a href="true"><i className="fa fa-youtube-play" /></a></li>
                  <li><a href="true" className="align-right">Đăng ký</a>|<a href="true" className="align-left">Đăng nhập</a></li>
                  <li><a href="true"><img src="./image/language.png" alt=""/></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="main-menu">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <a className="navbar-brand" href="true"><img src="./image/logo.png" alt=""/></a>
                <ul className="menu-mobile">
                  <li className="hotline">Hotline:<span> 1900 636 351</span></li>
                  <li className="gio-hang"><a href="true"><img className="shopping-cart" src="./image/shopping_cart.png" alt="" /></a></li>
                  <li><button id="toggle"><img className="search-icon" src="~/img/layout/search-ic.png" alt="" /></button><input className="input-text" type="text" /></li>
                </ul>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                  <ul className="navbar-nav" id="menu">
                    <li className="nav-item">
                      <Link to="/home" className="nav-link">Trang chủ<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/about" className="nav-link" href="true">Về Antana Food</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/products" className="nav-link">Sản phẩm</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/news" className="nav-link" href="true">Tin tức</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/contact" className="nav-link" href="true">Liên hệ</Link>
                    </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2 input-search" type="search" placeholder="Search" aria-label="Search" />
                    <a href="true"><img className="shopping-cart" src="./image/shopping_cart.png" alt=""/></a>
                  </form>
                </div>
              </div>
            </nav>
          </div>
          <div className="slide-show">
            <Slide/> {/* add slide component */}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;