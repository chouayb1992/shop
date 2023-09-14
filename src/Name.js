import React from "react";
import {productJSON} from './product.js';

class Name extends React.Component {
    render(){
      const {name} = JSON.parse(productJSON)

      return <h1>{name}</h1>;
    }
   }

export default Name;