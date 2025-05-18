import React from 'react';

import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../assets/tree9.png';
import { useGlobalReducer } from '../Store';
import { NavLink } from "react-router-dom"

function getLink(taskid) {
    let details_link = "/details/" + taskid
    return details_link
}

function AllLink(props) {
    if (props.status==='data_is_fetched') {
        return <Nav.Link as={NavLink} to="/all">All</Nav.Link>
    } else {
        return <Nav.Link disabled >All</Nav.Link>
    }
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

function CVLink(props) {
    if (props.status==='data_is_fetched') {
        return <Nav.Link target="_blank" href="https://uilennest.net/cv/">CV & Portfolio</Nav.Link>

    } else {
        return <Nav.Link disabled >CV & Portfolio</Nav.Link>
    }
}

function ITProjectsLink(props) {
    if (props.status==='data_is_fetched') {
        return <Nav.Link as={NavLink} to="/it-projects">IT Projects</Nav.Link>
    } else {
        return <Nav.Link disabled >IT Projects</Nav.Link>
    }
}

function AllProjectsLink(props) {
    if (props.status==='data_is_fetched') {
        return <NavDropdown.Item as={NavLink} to="/it-projects">All</NavDropdown.Item>
        //return <NavDropdown.Item  href="/it-projects/websites">Websites</NavDropdown.Item>

    } else {
        return <NavDropdown disabled >All</NavDropdown>
    }
}

function WebsitesLink(props) {
    if (props.status==='data_is_fetched') {
        return <NavDropdown.Item as={NavLink} to="/websites">Websites (static html)</NavDropdown.Item>
        //return <NavDropdown.Item  href="/it-projects/websites">Websites</NavDropdown.Item>

    } else {
        return <NavDropdown disabled >Websites</NavDropdown>
    }
}

function FrontendLink(props) {
    if (props.status==='data_is_fetched') {
        return <NavDropdown.Item as={NavLink} to="/frontends">Frontends (React/Javascript)</NavDropdown.Item>

    } else {
        return <NavDropdown disabled >Frontends</NavDropdown>
    }
}
function BackendLink(props) {
    if (props.status==='data_is_fetched') {
        return <NavDropdown.Item as={NavLink} to="/backends">Backends (Django/Python)</NavDropdown.Item>
    } else {
        return <NavDropdown disabled >Backends</NavDropdown>
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
        <Container fluid>
        <Navbar bg="dark" variant="dark">

            <div className="d-none d-md-block d-lg-block d-xl-block">
                <img alt='' src={logo} width="40" height="40" className="d-inline-block align-top"/>
                <Navbar.Brand href="/">&nbsp;OneTreeWood </Navbar.Brand>
            </div>
            <Nav className="mr-auto">
                <AllLink status={my_state.status}/>
                <TravelLink status={my_state.status}/>

                <div className="d-none d-md-block d-lg-block d-xl-block">
                    <MusicLink status={my_state.status}/>
                </div>
                <div className="d-none d-md-block d-lg-block d-xl-block">
                    <CVLink status={my_state.status}/>
                </div>


                <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            </Nav>
            &nbsp;

        </Navbar>
        </Container>
    );
}