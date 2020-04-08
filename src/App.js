import React from 'react';
import MenuAppBar from './components/HeaderComponent';
import MainScreen from './components/MainScreen';
import FlipClock from 'x-react-flipclock'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AuctionComponent from './components/auctionComponent';
import AucCarModelComponent from './components/AucCarModelComponenet';
import FlipClockM from './components/flipTimmer'
import {CountdownTimer } from './components/countdownTimer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactComponent from './components/contactComponent';
import TeamComponent from './components/teamComponent';
function App() {
  return (
<div >
    {/* <ContactComponent/> */}
{/* <FlipClockM/> */}

 <MenuAppBar/>
  <MainScreen/> 
  {/* <TeamComponent/> */}
    {/* <AuctionComponent/>
  {/* <AucCarModelComponent/> */}
{/* <div><CountdownTimer endDate={new Date(2020, 3, 9)}/></div> */}
 
</div>

  );
}

export default App;
