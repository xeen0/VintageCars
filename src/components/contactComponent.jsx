import React from "react";
import ContactFormComponent from "./contactForm.component";
import ContactDetails from "./conteactDetail.component";
import Center from "react-center";
import blackbg from "/mnt/B48E87058E86BF7C/ACM_HACKATHON2020/vintagecars/src/components/blackbg1.jpg";
import { SocialIcon } from 'react-social-icons';
import "./contactPage.css";
export default function ContactComponent() {
  return (
    <div  style={{
        // backgroundImage: `url(${blackbg})`,
        backgroundColor:'red',
        width: "100%",
        height: "100%",
        zIndex:-1
      }}>
      {/* <div class="column">
        <div class="leftside" >
          <ContactDetails />
        </div>
      </div> */}
      <div class="column"   style={{backgroundImage: `url(${blackbg})` , zIndex:'-1'}}>
        <div class="rightside" >
              <h1 style={{color:'white'}} >    Contact Us</h1>
    
          <ContactFormComponent />
        <br/>
        <u style={{color:'white'}}  >our links</u>

          <div >
            <br/>
        <SocialIcon network="facebook" url="https://www.facebook.com/sahitsrivyshnav.mahadevapuram"  />&nbsp
        <SocialIcon url="https://www.linkedin.com/in/sahith-srivyshnav-415b64157/" />
        
        </div>
        </div>
        
      </div>
    </div>
  );
}
