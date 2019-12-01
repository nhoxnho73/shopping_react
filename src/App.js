import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Products from './components/products';
import About from './components/About';
import Contact from './components/contact'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
      <Header/>
      <Route path="/about" exact component={About} />
      <Route path="/products" component={Products}/>
      <Route path="/contact" component={Contact} />
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
