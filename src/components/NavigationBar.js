import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/tree9.png';
import { useGlobalReducer } from '../Store';
import { NavLink } from "react-router-dom"

function getLink(taskid) {
    let details_link = "/details/" + taskid
    return details_link
}

function TravelLink(props) {
    if (props.status==='data_is_fetched') {
        return <Nav.Link as={NavLink} to="/travel">Travel</Nav.Link>
    } else {
        return <Nav.Link disabled >Travel</Nav.Link>
    }
}

function HikingLink(props) {
    if (props.status==='data_is_fetched') {
        return <Nav.Link as={NavLink} to="/hiking">Hiking</Nav.Link>
    } else {
        return <Nav.Link disabled >Hiking</Nav.Link>
    }
}

function MusicLink(props) {
    if (props.status==='data_is_fetched') {
        return <Nav.Link as={NavLink} to="/music">Music</Nav.Link>
    } else {
        return <Nav.Link disabled >Music</Nav.Link>
    }
}

function ITProjectsLink(props) {
    if (props.status==='data_is_fetched') {
        return <Nav.Link as={NavLink} to="/it-projects">IT Projects</Nav.Link>
    } else {
        return <Nav.Link disabled >IT Projects</Nav.Link>
    }
}

function AstronomyLink(props) {
    if (props.status==='data_is_fetched') {
        return <Nav.Link as={NavLink} to="/astronomy">Astronomy</Nav.Link>
    } else {
        return <Nav.Link disabled >Astronomy</Nav.Link>
    }
}

// conditionally render the details link
function DetailsLink(props) {
    if (props.taskid===undefined) {
        return <Nav.Link disabled >Details</Nav.Link>
    } else {
        return <Nav.Link as={NavLink} to={getLink(props.taskid)}>Details</Nav.Link>
    }
}

export function NavigationBar() {
    const [ my_state , my_dispatch] = useGlobalReducer()

    return (
        <Navbar bg="dark" variant="dark">

            <img alt='' src={logo} width="40" height="40" className="d-inline-block align-top"/>

            <Navbar.Brand href="/">&nbsp;OneTreeWood </Navbar.Brand>
            <Nav className="mr-auto">
                <TravelLink status={my_state.status}/>
                <HikingLink status={my_state.status}/>
                <MusicLink status={my_state.status}/>
                <AstronomyLink status={my_state.status}/>
                <ITProjectsLink status={my_state.status}/>
                <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            </Nav>
            &nbsp;

        </Navbar>

    );
}