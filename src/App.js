import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Products from './components/products';
import About from './components/About';
import Contact from './components/contact';
import News from './components/news';
import Home from './components/home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
      <Header/>
      <Route path="/home" exact component={Home} />
      <Route path="/about" component={About}/>
      <Route path="/products" component={Products}/>
      <Route path="/contact" component={Contact} />
      <Route path="/news" component={News} />
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
