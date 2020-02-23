import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ItemCard from './cards/ItemCard'

// loop through a list of observations and create a Card with a clickable thumbnail for all of them
export default function Tiles(props) {

    return (
        <div>
            <Container fluid>
                <Row>
                    {
                        props.data.map((item) => {
                            if (item.parent.includes(props.parent)) {
                                return (
                                    <Col lg={true}>
                                        <ItemCard item = {item}/>
                                    </Col>
                                );
                            }})
                    }
                </Row>
            </Container>
        </div>
    );

}

