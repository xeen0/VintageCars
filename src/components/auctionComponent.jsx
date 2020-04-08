import React, { useState } from "react";
import { AucCars } from "./AuctionCars";
import Card from "react-bootstrap/Card";
import FlipClock from 'x-react-flipclock'
// import CountdownTimer from "react-component-countdown-timer";
import {CountdownTimer} from './countdownTimer'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import blackbg from "/mnt/B48E87058E86BF7C/ACM_HACKATHON2020/vintagecars/src/components/blackbg1.jpg";
import Button from "react-bootstrap/Button";
import AucCarModelComponent from "./AucCarModelComponenet";
import FlipClockM from "./flipTimmer";
export default class AuctionComponent extends React.Component{

  constructor(){
    super();
    this.state ={
      show:false,
      cars:AucCars,
      selectedCar:AucCars[0].car,
      error:false
    }
  }
   onBid=(e,n,id)=>{
      if(e>AucCars[id].car.price &&n!=null &&n!=''&&n!=undefined){
       const cpyState = Object.assign({},this.state)
        cpyState.cars[id].car.price=e
        cpyState.cars[id].car.owner=n
        console.log(cpyState)
        this.setState({
          ...cpyState
        })
        this.setState({
          show:false
         
        })
        this.setState({
          error:false
         
        })
        
      }else{
        this.setState({
          error:true
        })
      }
        
  }
   
 render(){ 


   return (
    <div
      style={{
        backgroundImage: `url(${blackbg})`,
        width: "100%",
        height: "100%",
      }}
    >
    <h1>READY TO GO!!!</h1>
    <Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  showDots={false}
  slidesToSlide={1}
  swipeable
>
        {this.state.cars.map(({id,car}) => (
          <div key={id}>
            <Card
              text="white"
              style={{
                width: "50rem",
                height: "70rem",
                // background:"inherit",
                backgroundColor:'black',
              }}
            >
              <Card.Img
                variant="top"
                src={car.images[0]}
                style={{ height: "20rem" }}
              />
              <Card.Body>
                <Card.Title class="h1 ul">{car.name}</Card.Title>
                <Card.Text class="h3">{car.context}</Card.Text>
                <Button
                  variant="primary"
                  size="lg"
                  block
                  onClick={() => {
                    this.setState({
                      show:true,
                      selectedCar:car
                    })
                    console.log(this.state)
                  }}
                >
                  Know More
                </Button>
                <br/>
                <br/>
                <br/>
                <br/>

                <div><FlipClockM/></div>
                {/* <div><CountdownTimer count={5432} border showTitle noPoints /></div> */}
                  <div><CountdownTimer endDate={car.endDate}/></div>

            <Card.Text class="h1">Current Value :${car.price}</Card.Text>
            <Card.Text class="h4">current Owner:{car.owner}</Card.Text>
              </Card.Body>
            </Card>
            
          </div>
        ))}
        
      </Carousel>
      <div style={{width:100}}>
      <AucCarModelComponent
              show={this.state.show}
              onHide={() => this.setState({show:false })}
              car={this.state.selectedCar}
              onBid={this.onBid.bind(this)}
              error={this.state.error}
            />
            </div>
    </div>
  )};
}
