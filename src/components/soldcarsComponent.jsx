import React from "react";
import { SoldCars } from "./soldCars";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import blackbg from "/mnt/B48E87058E86BF7C/ACM_HACKATHON2020/vintagecars/src/components/blackbg1.jpg";

export default function SoldComponent() {
  
  const cardCar = SoldCars.map((car) => (
    <Carousel.Item
    
      style={{
        backgroundImage: `url(${blackbg})`,
        width: "100%",
        height: "100%",
      }}
    >
      <Card   text='white' bg='dark' style={{ backgroundImage:`url(${blackbg})`,width:'120%',height:'auto'}} >

      <Card.Title class='h1'style={{position:'relative'}}>OUR SERVICES</Card.Title >
      <div style={{ display:'flex' ,flexDirection:'row'}}>
        <Card.Img  src={car.Image} style={{  width: '60%' ,height:'100%' }} />
        <Card.Body>
    <Card.Title class='h1'>{car.Header}</Card.Title>
          <Card.Text class='h4' >
            {car.Context}
            <br/>
            <br/>
            <br/>
            <br/>
            
    <Card.Text class='h1'>Sold at: ${car.Prize}</Card.Text>
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
        </div>
      </Card>
    </Carousel.Item>
    
  ));
  return (
    <div>

      <Carousel keyboard='false' controls='false' indicators='false'>{cardCar}</Carousel>
    </div>
  );
}
