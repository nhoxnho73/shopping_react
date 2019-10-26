import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Products from './components/products';
import About from './components/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
      <Header/>
      <Route path="/" exact component={About} />
      <Route path="/products" component={Products}/>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
