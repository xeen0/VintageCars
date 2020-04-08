import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Scrollchor from 'react-scrollchor';  
import "./header.css";
import Slide from "@material-ui/core/Slide";
import Nav from "react-bootstrap/Nav";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
 
  window: PropTypes.func,
};

export default function MenuAppBar(props) {
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar
            color="transparent"
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
            }}
          >
            <Nav defaultActiveKey="/home" as="ul">
              <Nav.Item as="li">
              <Scrollchor  to="home" className="nav-link"><Typography   variant="h5" style={{color:'white'}}>Home </Typography></Scrollchor>
              </Nav.Item>

              <Nav.Item as="li">
              <Scrollchor to="ourService" className="nav-link"><Typography   variant="h5" style={{color:'white'}}>Our service </Typography></Scrollchor>
              </Nav.Item>
              
              <Nav.Item as="li">
              <Scrollchor to="auctions" className="nav-link"><Typography   variant="h5" style={{color:'white'}}>Auctions </Typography></Scrollchor>
              </Nav.Item>
              <Nav.Item as="li">
              <Scrollchor to="contactUs" className="nav-link"><Typography   variant="h5" style={{color:'white'}}>Contact Us </Typography></Scrollchor>
              </Nav.Item>
            </Nav>
            {/* <Toolbar>
              <Typography variant="h5" style={{ color: "white"  }}>
                M & X{" "}
              </Typography>
            </Toolbar> */}
          </AppBar>
        </HideOnScroll>
        <Toolbar />
      </React.Fragment>
    </div>
  );
}
