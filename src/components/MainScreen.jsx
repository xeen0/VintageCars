import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageNavigation,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import Slideshow from "./intro";
import soldComponent from "./soldcarsComponent";
import SoldComponent from "./soldcarsComponent";
import AuctionComponent from "./auctionComponent";
import ContactComponent from "./contactComponent";
import TeamComponent from "./teamComponent";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

export default function MainScreen() {
  return (
    <React.Fragment>
      <Fullpage>
        <FullpageNavigation />
        <FullPageSections>
            <div id="home" style={{ padding: "0em" }}>
              <FullpageSection
                style={{
                  height: "105vh",
                }}
              >
                <Slideshow />
              </FullpageSection>
            </div>
          <Fade>
            <div id="ourService">
              <FullpageSection
                style={{
                  height: "100vh",
                }}
              >
                <SoldComponent />
              </FullpageSection>
            </div>
          </Fade>
          <div id="auctions">
            <FullpageSection
              style={{
                height: "100vh",
              }}
            >
              <AuctionComponent />
            </FullpageSection>
          </div>
          <div id="Our Team">
            <FullpageSection
              style={{
                height: "35vh",
              }}
            >
              <TeamComponent />
            </FullpageSection>
          </div>
          <div id="contactUs" style={{ padding: "0em" }}>
            <FullpageSection>
              <ContactComponent />
            </FullpageSection>
          </div>
        </FullPageSections>
      </Fullpage>
    </React.Fragment>
  );
}
