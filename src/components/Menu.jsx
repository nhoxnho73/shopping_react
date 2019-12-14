import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

const menus = [
  {
    name : 'Trang Chủ',
    to : '/',
    exact : true
  },
  {
    name : 'Về Antana Food',
    to : '/about',
    exact : false
  },
  {
    name : 'Sản Phẩm',
    to : '/products',
    exact : false
  },
  {
    name : 'Tin Tức',
    to : '/news',
    exact : false
  },
  {
    name : 'Liên Hệ',
    to : '/contact',
    exact : false
  }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
      let active = match ? 'nav-item active' : '';
      return (
        <li className={active}>
          <Link to={to} className="nav-link">
            {label}
          </Link>
        </li>
      )
    }}/>
  )
}
class Menu extends Component {
  render() {
    return(
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul className="navbar-nav" id="menu">
          { this.showMenus(menus) }
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2 input-search" type="search" placeholder="Search" aria-label="Search" />
          <Link to="/cart" className="link-cart"><img className="shopping-cart" src="./image/shopping_cart.png" alt=""/></Link>
        </form>
    </div>
    );
  }
  showMenus = (menus) => {
    let result = null;
    if(menus.length > 0){
      result = menus.map((menu, index) => {
       return (
        <MenuLink 
          key={index} 
          label={menu.name} 
          className="nav-link" 
          to={menu.to} 
          activeOnlyWhenExact={menu.exact} />
       )
      });
    }
    return result;
  }
}

export default Menu;