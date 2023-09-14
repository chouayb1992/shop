import React from "react";
import {productJSON} from './product.js';


class Image extends React.Component {
  
    render(){
      const {image} = JSON.parse(productJSON)
      return <img src={image} alt="myImg" />
    }
   }

export default Image;