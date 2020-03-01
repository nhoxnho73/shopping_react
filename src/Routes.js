import React from 'react';
import Products from './components/products';
import About from './components/About';
import Contact from './components/contact';
import News from './components/news';
import Home from './components/home';
import NotFound from './components/NotFound';
import Cart from './components/Cart';

const routes = [
  {
    path : '/',
    exact : true,
    main : () => <Home />
  },
  {
    path : '/about',
    exact : false,
    main : () => <About />
  },
  {
    path : '/products',
    exact : false,
    main : () => <Products />
  },
  {
    path : '/contact',
    exact : false,
    main : () => <Contact />
  },
  {
    path : '/news',
    exact : false,
    main : () => <News />
  },
  {
    path : '/cart',
    exact : false,
    main : () => <Cart />
  },
  {
    path : '',
    exact : false,
    main : () => <NotFound />
  }
];

export default routes;
