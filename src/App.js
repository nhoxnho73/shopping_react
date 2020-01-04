import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import News from './components/News';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/products" component={Products}/>
          <Route path="/contact" component={Contact} />
          <Route path="/news" component={News} />
          <Route path="/cart" component={Cart} />
          <Route component={NotFound}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
