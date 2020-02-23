import React from 'react';
import {Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

// show a clickable icon
export default function GoButton(props) {

    // only show the  button when there is content
    if (!props.item.url_link) {
        return null
    }

    return (
        <a href = {props.item.url_link} title={props.item.name} target="_blank" rel="noopener noreferrer">
            <Button variant="success" size="sm"> <FontAwesomeIcon icon={faGlobe} /> {props.item.url_link_label}</Button>
        </a>
    );
}

