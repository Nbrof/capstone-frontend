import React from 'react'
import { Jumbotron, Container } from 'reactstrap';


const Subheader = (props) => {


    return (
        <div className="Quotebox">
            <Jumbotron fluid id="test">
                <Container fluid>
                    <p className="lead">
                        <h1>Launch</h1>
                    </p>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Subheader