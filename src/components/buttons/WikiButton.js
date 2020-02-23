import React from 'react';
import {Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHiking, faCloud } from '@fortawesome/free-solid-svg-icons'

// show a clickable icon
export default function WikiButton(props) {

    // only show the  button when there is content
    if (!props.item.url_wiki) {
        return null
    }

    let renderIcon = faHiking
    if (props.item.parent==='it-projects') {
        renderIcon = faCloud
    }

    return (
        <a href = {props.item.url_wiki} title={props.item.name} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="sm"> <FontAwesomeIcon icon={renderIcon} /> {props.item.url_wiki_label}</Button>
        </a>
    );
}

