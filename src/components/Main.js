import React, {useState, useEffect }  from 'react';
import '../App.css';

import { get_backend_url } from '../utils/web'
import { useGlobalReducer } from '../Store';
import { useFetchData } from '../hooks/useFetchData';

import { NavigationBar } from './NavigationBar';
import { Home } from './Home';
import ObservationsPage from '../routes/observations/ObservationsPage';
import ObservationDetails from '../routes/details/ObservationDetails';

import { About } from './About';



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

    // a timer is used for a 60 second polling of the data.
    const [timer, setTimer] = useState(undefined)

    //useFetchObservations(get_backend_url("/altapi/observations"),{onMount:true, mode:'no-cors'})
    // useFetchReleases(get_backend_url("/altapi/releases"),{onMount:true, mode:'no-cors'})
    // http://80.101.27.83/homebase/datacenter/items/
    useFetchData("http://80.101.27.83/homebase/datacenter/items/",{onMount:true})

    return (
        <Router basename="alta-components">
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
                        <Home />
                    </Route>

                    <Route path="/observations">
                        <ObservationsPage />
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
            </div>

            <footer><small>(C) Nico Vermaas - version 1.0 - 23 feb 2020</small></footer>
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