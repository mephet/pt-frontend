import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import './JBHead.css'

const JBHead = () => (
    <Jumbotron className='jumbo-splash-screen'>
        <h1>C2 Pivotal Tracker interface</h1>
        <p>
            Information on current sprint details
            <br />
            Enable automatic tagging for released/reviewed stories on Pivotal Tracker.
        </p>            
    </Jumbotron>
)

export default JBHead;