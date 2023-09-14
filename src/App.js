import './App.css';
import React from "react";
import Name from './Name.js'
import Price from './Price.js'
import Description from './Description.js'
import Image from './Image.js'
import {Card,Button} from 'react-bootstrap'
// import {productJSON} from './product';

const App = ()=>{
  // const product = JSON.parse(productJSON)
  // console.log(product);
  return(
    <Card style={{ width: '18rem' }}>
    <Image />
    <Card.Body>
      <Card.Title>Product Details</Card.Title>
      <Name />
      <Price />
      <Description />

      <Button variant="primary">Add product</Button>
      <Card.Title>Hello there: Chouayb Attia</Card.Title>
    </Card.Body>
  </Card>
  )
}



export default App;
