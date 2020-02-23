import React from 'react';
import {Card, Button } from 'react-bootstrap'

// display the main image
function DrawImage(props) {
    return <a href={props.thumbnail} target=""_blank><img src={props.thumbnail} width="300"/></a>
}

// display a single archive on a card
export default function ImageCard(props) {

    return (

        <Card className="card-archive">
            <Card.Body>
                <tr>
                    <DrawImage thumbnail={props.item.url_image}/>
                </tr>
            </Card.Body>

        </Card>

    );

}


