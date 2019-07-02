import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

class HomeTimeline extends React.Component {
    constructor(props) {
        super(props);
        
        
        const startMillis = (new Date(props.data.sprintData.sprint_start_date)).getTime();
        const releaseMillis = (new Date(props.data.sprintData.release_date)).getTime();
        const reviewMillis = (new Date(props.data.sprintData.review_date)).getTime();
        const elapsedMillis = Date.now() - startMillis;
        // const elapsedMillis = reviewMillis - startMillis;

        const totalDuration = reviewMillis - startMillis;
        const developmentDuration = releaseMillis - startMillis;
        const deploymentDuration = reviewMillis - releaseMillis;

        const developmentPercentage = elapsedMillis >= developmentDuration ? developmentDuration / totalDuration : elapsedMillis / totalDuration; 

        const deploymentPercentage = elapsedMillis - developmentDuration > 0 ? (elapsedMillis - developmentDuration) / totalDuration : 0; 

        this.state = {
           developmentPercentage: developmentPercentage * 100,
           deploymentPercentage: deploymentPercentage * 100
        }
        
        console.log(this.state);
    }

    render() {
        // return <h1>Bar here</h1>
        return (
            <ProgressBar>
                <ProgressBar animated now={this.state.developmentPercentage} label={`Development phase`}/>
                <ProgressBar animated striped variant="danger" now={this.state.deploymentPercentage} label={`Deployment phase`}/>
            </ProgressBar>
        );
    }

}

export default HomeTimeline;