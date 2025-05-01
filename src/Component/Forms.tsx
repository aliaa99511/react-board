
import React, { Component } from 'react'
import '../Style/Contact.css'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class Forms extends Component {
render() {
    return (
        
<div className="pare parent7" >
	
	<div className="container">
        <div className="row hello">
            
            <div className="col">
                <div className="son text-center">
                    <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
                    <p>email@email.com</p>
                </div>
            </div>
            <div className="col">
                <div className="son text-center two">
                    <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
                    <p>Chicago, US</p>
                </div>
            </div>
            <div className="col">
                <div className="son text-center">
                    <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
                    <p>512312311</p>
                </div>
            </div>
        </div>


	<hr />
	
    
	<Form>
		
    <FormGroup row>
        <Label for="examplePassword" sm={12}>Name</Label>
        <Col sm={12}>
            <Input type="text"  id="examplePassword" placeholder="your name" />
        </Col>
        </FormGroup>
		
        <FormGroup row>
            <Label for="exampleEmail" sm={12}>Email</Label>
            <Col sm={12}>
                <Input type="email" name="email" id="exampleEmail" placeholder=" your Email " />
            </Col>
        </FormGroup>
		
        <FormGroup row>
            <Label for="exampleText" sm={12}>Message</Label>
            <Col sm={12}>
                <Input type="textarea" name="text" id="exampleText" placeholder="Message"  />
            </Col>
        </FormGroup>

		<div className="son4">
		  <div className="input-group mb-3">
			  <button type="button" className="btn btn-dark text-uppercase bro"> 
				  
				  <p className="text-capitalize">send message</p>
				  
				  <div className="input-group-prepend">
					  <i className="fa fa-paper-plane" aria-hidden="true"></i>
				  </div>
				  
			   </button>
		   </div>
		</div>
		
	</Form>
	
    </div>
   </div>
 
        )
    }
}

export default Forms
/*
 className="pare parent7"
<div className="row hello">
		
		<div className="col">
			<div className="son text-center">
				<i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
				<p>email@email.com</p>
			</div>
		</div>
		<div className="col">
			<div className="son text-center two">
				<i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
				<p>Chicago, US</p>
			</div>
		</div>
		<div className="col">
			<div className="son text-center">
				<i className="fa fa-phone fa-2x" aria-hidden="true"></i>
				<p>512312311</p>
			</div>
		</div>
	</div>
*/






















/*import React, { Component } from 'react'
import '../Style/Contact.css'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class Forms extends Component {
render() {
    return (
        <div className="mycontact">
            <h1>Contact us</h1>
            <div className="container">
    
                <div className="adres">
                    <div className="alii">
                        <i class="fa fa-map-marker"></i>
                        <p>
                            <span className="osa">Address:</span>
                            <span>198 west 21th street</span>
                        </p>
                        <p className="text-muted">suit 721 new york ny 10016</p>
                    </div>
                    <div className="alii">
                        <i class="fa fa-home"></i>
                        <p>
                        <span className="osa">Address:</span>
                        <span>198 west 21th street</span>
                        </p>
                        <p className="text-muted">suit 721 new york ny 10016</p>
                    </div>
                    <div className="alii">
                        <i class="fa fa-plane"></i>
                        <p>
                        <span className="osa">Address:</span>
                        <span>198 west 21th street</span>
                        </p>                   
                        <p className="text-muted">suit 721 new york ny 10016</p>
                    </div>
                    <div className="alii">
                        <i class="fa fa-rocket"></i>
                        <p>
                        <span className="osa">Address:</span>
                        <span>198 west 21th street</span>
                        </p>                   
                        <p className="text-muted">suit 721 new york ny 10016</p>
                    </div>
                </div>
    
    
    
                <div className="myform">
                <Form>
                    
                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>Name</Label>
                        <Col sm={10}>
                            <Input type="text"  id="examplePassword" placeholder="your name" />
                        </Col>
                    </FormGroup>
    
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input type="email" name="email" id="exampleEmail" placeholder=" your Email " />
                        </Col>
                    </FormGroup>
    
                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>Subject</Label>
                        <Col sm={10}>
                            <Input type="text"  id="examplePassword" placeholder="Subject" />
                        </Col>
                    </FormGroup>
    
    
                    <FormGroup row>
                    <Label for="exampleText" sm={2}>Message</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="text" id="exampleText" placeholder="Message"  />
                    </Col>
                    </FormGroup>
    
                    <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button size="lg">Send Message</Button>
                    </Col>
                    </FormGroup>
    
                </Form>
    
                </div>
    
            </div>
        </div>
        )
    }
}

export default Forms*/