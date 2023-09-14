import React from "react";
import {productJSON} from './product.js';

class Description extends React.Component {
    render(){
      const {description} = JSON.parse(productJSON)

      return <h1>{description}</h1>;
    }
   }

export default Description;