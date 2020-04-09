import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from '/mnt/B48E87058E86BF7C/ACM_HACKATHON2020/vintagecars/src/components/1.png'
import img2 from '/mnt/B48E87058E86BF7C/ACM_HACKATHON2020/vintagecars/src/components/2.png'
import img3 from '/mnt/B48E87058E86BF7C/ACM_HACKATHON2020/vintagecars/src/components/3.jpg'
import { Typography } from '@material-ui/core'
import Zoom from 'react-reveal/Zoom'
export default function Slideshow () {
  return (
    <Carousel controls='false'   indicators='false'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption style={{position:'absolute',top:"26vh",zIndex:10 , backgroundColor:'inherit'}}>
      <Zoom>
    <Typography variant="h1" style={{ color: "white" }}>
          Generation Of Miracles
        </Typography>
        <Typography variant="h5" style={{ color: "white" }}>
          Heros of new ERA
        </Typography>
        </Zoom>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Third slide"
    />

<Carousel.Caption style={{position:'absolute',top:"26vh",zIndex:10 , backgroundColor:'inherit'}}>
  <Zoom>
    <Typography variant="h1" style={{ color: "white" }}>
          Generation Of Miracles
        </Typography>
        <Typography variant="h5" style={{ color: "white" }}>
          Heros of new ERA
        </Typography>
        </Zoom>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

<Carousel.Caption style={{position:'absolute',top:"26vh" ,left:"25vw",zIndex:10  , backgroundColor:'inherit'}}>
  <Zoom>
    <Typography variant="h1" style={{ color: "white" }}>
          Generation Of Miracles
        </Typography>
        <Typography variant="h5" style={{ color: "white" }}>
          Heros of new ERA
        </Typography>
        </Zoom>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}