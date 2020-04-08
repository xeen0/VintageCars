import React from "react";
import { Team } from "./team";
import blackbg from "/mnt/B48E87058E86BF7C/ACM_HACKATHON2020/vintagecars/src/components/blackbg1.jpg";
import {
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
  CardGroup,
} from "reactstrap";
import {
  UserCard,
  FlippingCard,
  FlippingCardBack,
  FlippingCardFront,
} from "react-ui-cards";
import Fade from 'react-reveal/Fade';
export default function TeamComponent() {
  return (
      <div style={{backgroundColor:'black'}}>
        <h1 style={{color:"white"}}> OUR TEAM</h1>
    <CardGroup>
        {
            Team.map(tm => (
              <Fade right>
                <FlippingCard  >
                <FlippingCardBack className="text-white"  top width="100%">
                  <CardTitle className="h1 text-white"  >{tm.Name}</CardTitle>
                  <CardSubtitle className="mb-2 text-white">
                    {Team[0].desp}
                  </CardSubtitle>
                  <CardText className="h6 text-white">{tm.context}</CardText>
                  <CardLink href="https://www.facebook.com/sahitsrivyshnav.mahadevapuram">
                    Facebook{" "}
                  </CardLink>
                  <CardLink href="https://www.linkedin.com/in/sahith-srivyshnav-415b64157/">
                    Linkdin
                  </CardLink>
                </FlippingCardBack>
                <FlippingCardFront>
                  <UserCard
                    className=""
                    avatar={tm.img}
                    name={tm.Name}
                    header={tm.head_img}
                    positionName={tm.desp}
                  />
                </FlippingCardFront>
                </FlippingCard>
                </Fade>
            ))
        }
    </CardGroup>
    </div>
  );
}

{
  /* <FlippingCard>
            <FlippingCardBack style={{ width: "100rem", height: "100rem" }}>
              <Card style={{ width: "15rem", height: "20rem" }}>
                <Card.Body>
                  <Card.Title>{Team[0].Name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {Team[0].desp}
                  </Card.Subtitle>
                  <Card.Text>{Team[0].context}</Card.Text>
                  <Card.Link href="https://www.facebook.com/sahitsrivyshnav.mahadevapuram">
                    Facebook{" "}
                  </Card.Link>
                  <Card.Link href="https://www.linkedin.com/in/sahith-srivyshnav-415b64157/">
                    Linkdin
                  </Card.Link>
                </Card.Body>
              </Card>
            </FlippingCardBack>
            <FlippingCardFront>
              <UserCard
                
                avatar={Team[0].img}
                name={Team[0].Name}
                header={Team[0].head_img}
                positionName={Team[0].desp}
              />
            </FlippingCardFront>
          </FlippingCard> */
}

//   <FlippingCard>
//     <FlippingCardBack>
//       <Card style={{ width: "15rem", height: "20rem" }}>
//         <Card.Body>
//           <Card.Title>{Team[1].Name}</Card.Title>
//           <Card.Subtitle className="mb-2 text-muted">
//             {Team[1].desp}
//           </Card.Subtitle>
//           <Card.Text>{Team[1].context}</Card.Text>
//           <Card.Link href="https://www.facebook.com/manish.reddy.3950178?epa=SEARCH_BOX">
//             Facebook{" "}
//           </Card.Link>
//           <Card.Link href="https://www.linkedin.com/in/sahith-srivyshnav-415b64157/">
//             Linkdin
//           </Card.Link>
//         </Card.Body>
//       </Card>
//     </FlippingCardBack>
//     <FlippingCardFront>
//       <UserCard
//         avatar={Team[1].img}
//         name={Team[1].Name}
//         header={Team[1].head_img}
//         positionName={Team[1].desp}
//       />
//     </FlippingCardFront>
//     {/* </UserCard> */}
//   </FlippingCard>
