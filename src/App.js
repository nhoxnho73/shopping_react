import React, {Component} from 'react';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './Routes';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header/>
          <Switch>
            { this.showContentMenus(routes) }
          </Switch>
          <Footer/>
        </Router>
      </div>
    );
  }
  showContentMenus = (routes) => {
    let result = null;
    if(routes.length > 0){
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return result;
  }
}

export default App;
