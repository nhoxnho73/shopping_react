import React, {Component} from 'react';
import Slide from './slide';
import Menu from './Menu';
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
                <Menu/> {/* add menu component */}
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