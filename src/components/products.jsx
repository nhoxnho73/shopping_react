import React, {Component} from 'react';
import Fuirt from './Fuirt';
import Seed from './Seed';

class Products extends Component {
  render() {
    return(
      <div>
        <div className="container block--product">
          <div className="row">
            <Fuirt/>
            <Fuirt/>
            <Fuirt/>
          </div>
          <div className="row">
            <Seed/>
            <Seed/>
            <Seed/>
          </div>
        </div>
      </div>
    );
  }
}
export default Products;