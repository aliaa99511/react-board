import React, { Component } from 'react'
import '../Style/Digital.css'
import {Card, Button,Container, Col,Badge,CardImg, CardTitle, CardText, CardDeck,CardSubtitle, CardBody,CardImgOverlay, Row} from 'reactstrap';


export class Digital extends Component {
render() {
return (
    <div className="Digital">
       <Container>
           <Row>
               <Col>
                    <div className="item1">
                        <img src="images/about_hero.jpg"/>
                    </div>
               </Col>
               <Col>
                 <div className="item2">
                     <h1>We Create a Steps to Build a Successful Digital Product</h1>
                     <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis orem ipsum dolor sit amet, consectetur adipiscing.</p>
                     <Button color="danger">Contact us</Button>{' '}
                 </div>

               </Col>

           </Row>
     </Container> 
    </div>
)
}
}

export default Digital



