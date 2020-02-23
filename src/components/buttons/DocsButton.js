import React from 'react';
import {Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'

// show a clickable icon
export default function DocsButton(props) {

    // only show the  button when there is content
    if (!props.item.url_docs) {
        return null
    }

    return (
        <a href = {props.item.url_docs} title={props.item.name} target="_blank" rel="noopener noreferrer">
            <Button variant="info" size="sm"> <FontAwesomeIcon icon={faFileAlt} /> {props.item.url_docs_label}</Button>
        </a>
    );
}

