import React, {useState, useEffect }  from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

import { get_backend_url } from '../utils/web'
import { useGlobalReducer } from '../Store';
import { useFetchData } from '../hooks/useFetchData';

import { NavigationBar } from './NavigationBar';
import { HomePage } from '../routes/home/HomePage';
import ObservationDetails from '../routes/details/ObservationDetails';
import ITProjectsPage from '../routes/it-projects/ITProjectsPage';
import WebsitesPage from '../routes/websites/WebsitesPage';
import FrontendPage from '../routes/frontend/FrontendPage';
import BackendPage from '../routes/backend/BackendPage';
import MusicPage from '../routes/music/MusicPage';
import TravelPage from '../routes/travel/TravelPage';
import HikingPage from '../routes/hiking/HikingPage';
import AstronomyPage from '../routes/astronomy/AstronomyPage';
import AllPage from '../routes/all/AllPage';

import { About } from '../routes/about/About';



import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";


// This site has multiple pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

function Main () {

    // use global state
    const [ my_state , my_dispatch] = useGlobalReducer()

    // useFetchData("http://80.101.27.83/homebase/datacenter/items/",{onMount:true})
    useFetchData("https://uilennest.net/homebase/datacenter/items/",{onMount:true})

    return (
        <Router basename="">
            <Container fluid>
            <div>

                <NavigationBar/>

                {/*
                 A <Switch> looks through all its children <Route>
                 elements and renders the first one whose path
                 matches the current URL. Use a <Switch> any time
                 you have multiple routes, but you want only one
                 of them to render at a time
                 */}

                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>

                    <Route path="/all">
                        <AllPage />
                    </Route>

                    <Route path="/travel">
                        <TravelPage />
                    </Route>

                    <Route path="/hiking">
                        <HikingPage />
                    </Route>

                    <Route path="/music">
                        <MusicPage />
                    </Route>

                    <Route path="/it-projects">
                        <ITProjectsPage />
                    </Route>

                    <Route path="/websites">
                        <WebsitesPage />
                    </Route>

                    <Route path="/frontends">
                        <FrontendPage />
                    </Route>

                    <Route path="/backends">
                        <BackendPage />
                    </Route>

                    <Route path="/astronomy">
                        <AstronomyPage />
                    </Route>

                    <Route path="/about">
                        <About />
                    </Route>

                    <Route path='/alta' component={() => {
                        window.location.href = 'https://alta.astron.nl';
                        return null;
                    }}/>

                    <Route path="/details/:id" children={<ObservationDetailsForward />} />
                </Switch>


            <footer><small>(C) Nico Vermaas - version 1.2 - 24 nov 2021 - 20:00</small></footer>

            </div>
            </Container>
        </Router>
    );
}

// reroute to dataproduct details
function ObservationDetailsForward() {
    let { id } = useParams();

    return (
        <ObservationDetails runId={id}/>
    );
}

export default Main;