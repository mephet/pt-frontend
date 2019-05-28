import React, { Component } from 'react';
import ApiHandler from '../../api/apiHandler';
import {Table} from 'react-bootstrap';

class SprintInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sprintNo: 0,
            projectId: this.props.pid,
            stories: []
        }

        // this.stories = this.state.stories.map((story, key) => {
        //     <li key={story.id}>{story.name}</li>
        // })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            sprintNo: nextProps.data.sprintData.sprint_no,
            projectId: nextProps.pid
        })

        ApiHandler.getStoriesBySprintAndUser(this.state.projectId, this.state.sprintNo, 'MA')
            .then(res => {
                this.setState({
                    stories: res.stories.stories
                })
            })
    }

    render() {
        return(
            <Table>
                <thead>
                    <tr>
                        <th>Story Id</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.stories.map(story => {
                        return (
                            <tr>
                                <td>{story.id}</td>
                                <td>{story.name}</td>
                                <td>{story.story_type}</td>
                                <td>{story.estimate}</td>
                            </tr>
                        )
                    })}
                </tbody>
                
            </Table>
        ) 
    }
}

export default SprintInfo;