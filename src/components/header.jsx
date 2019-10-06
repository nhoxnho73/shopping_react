import React, {Component} from 'react';

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
                  <li><a href="true"><img src="~/img/[VN]_Antana_website_About_us/language.png" alt=""/></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="main-menu">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <a className="navbar-brand" href="true"><img src=".image/layout/logo.png" alt=""/></a>
                <ul className="menu-mobile">
                  <li className="hotline">Hotline:<span> 1900 636 351</span></li>
                  <li className="gio-hang"><a href="true"><img className="shopping-cart" src="~/img/[VN]_Antana_website_About_us/shopping_cart.png" alt="" /></a></li>
                  <li><button id="toggle"><img className="search-icon" src="~/img/layout/search-ic.png" alt="" /></button><input className="input-text" type="text" /></li>
                </ul>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                  <ul className="navbar-nav" id="menu">
                    <li className="nav-item">
                      <a className="nav-link" href="true">Trang chủ<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="true">Về Antana Food</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="true">Sản phẩm</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="true">Tin tức</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="true">Liên hệ</a>
                    </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2 input-search" type="search" placeholder="Search" aria-label="Search" />
                    <a href="true"><img className="shopping-cart" src="~/img/[VN]_Antana_website_About_us/shopping_cart.png" alt=""/></a>
                  </form>
                </div>
              </div>
            </nav>
          </div>
          <div className="slide-show">

          </div>
        </div>

      </div>
    );
  }
}

export default Header;