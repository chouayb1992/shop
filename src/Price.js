import React from "react";
import {productJSON} from './product.js';

class Price extends React.Component {
    render(){
      const {price} = JSON.parse(productJSON)

      return <h1>{price}</h1>;
    }
   }

export default Price;