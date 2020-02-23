
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import LoadingSpinner from '../../components/LoadingSpinner';
import Tiles from '../../components/Tiles'
import { useGlobalReducer } from '../../Store';

export default function AstronomyPage(props) {

    const [ my_state , my_dispatch] = useGlobalReducer()

    const loading = my_state.status === 'fetching'

    // conditional render. Only render the observations when the status is 'fetched'
    let renderData

    if (my_state.status==='data_is_fetched') {
        renderData = <Tiles data = {my_state.fetched_data} parent = "astronomy"/>
    }

    return (
        <div className="App">

                {loading ? <LoadingSpinner /> :
                    <Container fluid>

                        <Row>
                            <Col sm={12} md={12} lg={12}>
                                <div>
                                    {renderData}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                }
        </div>
    );
}