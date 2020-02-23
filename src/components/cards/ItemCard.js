import React from 'react';
import {Card, Row, Col, Container} from 'react-bootstrap'

import GoButton from '../buttons/GoButton'
import DocsButton from '../buttons/DocsButton'
import WikiButton from '../buttons/WikiButton'

function DrawImage(props) {
    return <a href={props.thumbnail} target=""_blank><img src={props.thumbnail} height="180" width="250"/></a>
}

// display a single archive on a card
export default function ItemCard(props) {

    return (

        <Card className="card-item">
            <Card.Body>
                <Container fluid>
                    <Row>
                        <Col>
                            <h3>{props.item.name}</h3>
                            <DrawImage thumbnail={props.item.url_image}/>
                            <hr></hr>
                            <h5>{props.item.description}</h5>
                            <hr></hr>
                            <p>
                                <GoButton item = {props.item}/> &nbsp;
                                <DocsButton item={props.item}/>&nbsp;
                                <WikiButton item={props.item}/>&nbsp;
                            </p>
                        </Col>
                    </Row>

                </Container>
            </Card.Body>
        </Card>


    );

}


