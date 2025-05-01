import React, { Component } from 'react'
import '../Style/Cvinformat.css'
import { Container, Row, Col ,Button} from 'reactstrap';


export class Cvinformat extends Component {
render() {
return (
    <div className="Cvinformat">
        <div className="overla">
            <Container>
                <h6>FEATURED TOURS PACKAGES</h6>
                <h1>Make a Difference with Your Online Resume!</h1>
                <Button outline color="info">
                    UPLOAD your cv
                </Button>{' '}
            </Container>
        </div>
    </div>
)
}
}

export default Cvinformat
