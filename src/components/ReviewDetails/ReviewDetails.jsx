import React from 'react';
import ApiHandler from '../../api/ApiHandler';
import PTConstants from '../../constants/PTConstants';
import { Container, Table } from 'react-bootstrap';
import ReviewDetailsTable from './ReviewDetailsTable';

class ReviewDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sprintNo: this.props.data.sprintData.sprint_no,
            projectId: this.props.pid,
            completedStories: null,
            totalStories: null,
        }

        this.getStoriesInCurrentSprint = this.getStoriesInCurrentSprint.bind(this)
    }
    

    async componentDidMount() {
        let output = await this.getStoriesInCurrentSprint(this.state.projectId, this.state.sprintNo);
        const sList = output.stories.stories;
        
        const unscheduled =  this.getStoriesByState(sList, PTConstants.STORY_STATE.UNSCHEDULED);
        const planned =  this.getStoriesByState(sList, PTConstants.STORY_STATE.PLANNED);
        const unstarted = this.getStoriesByState(sList, PTConstants.STORY_STATE.UNSTARTED);
        const started = this.getStoriesByState(sList, PTConstants.STORY_STATE.STARTED);
        const finished = this.getStoriesByState(sList, PTConstants.STORY_STATE.FINISHED);
        const delivered = this.getStoriesByState(sList, PTConstants.STORY_STATE.DELIVERED);
        const accepted = this.getStoriesByState(sList, PTConstants.STORY_STATE.ACCEPTED);
        const rejected = this.getStoriesByState(sList, PTConstants.STORY_STATE.REJECTED);

        const bugs = this.getStoriesByStoryType(sList, PTConstants.STORY_TYPE.BUGFIX);
        const chores = this.getStoriesByStoryType(sList, PTConstants.STORY_TYPE.CHORE);
        const features = this.getStoriesByStoryType(sList, PTConstants.STORY_TYPE.FEATURE);

        const completedD = features.filter(x => delivered.includes(x));
        const completedA = features.filter(x => accepted.includes(x));
        const completed =  [...new Set([...completedD, ...completedA])];


        this.setState({
            completedStories: completed,
            totalStories: output,
            unscheduledBugs: (bugs.filter(x => unscheduled.includes(x))).length,
            unscheduledChores: (chores.filter(x => unscheduled.includes(x))).length,
            unscheduledFeatures: (features.filter(x => unscheduled.includes(x))).length,
            plannedBugs: (bugs.filter(x => planned.includes(x))).length,
            plannedChores: (chores.filter(x => planned.includes(x))).length,
            plannedFeatures: (features.filter(x => planned.includes(x))).length,
            unstartedBugs: (bugs.filter(x => unstarted.includes(x))).length,
            unstartedChores: (chores.filter(x => unstarted.includes(x))).length,
            unstartedFeatures: (features.filter(x => unstarted.includes(x))).length,
            startedBugs: (bugs.filter(x => started.includes(x))).length,
            startedChores: (chores.filter(x => started.includes(x))).length,
            startedFeatures: (features.filter(x => started.includes(x))).length,
            finishedBugs: (bugs.filter(x => finished.includes(x))).length,
            finishedChores: (chores.filter(x => finished.includes(x))).length,
            finishedFeatures: (features.filter(x => finished.includes(x))).length,
            deliveredBugs: (bugs.filter(x => delivered.includes(x))).length,
            deliveredChores: (chores.filter(x => delivered.includes(x))).length,
            deliveredFeatures: (features.filter(x => delivered.includes(x))).length,
            acceptedBugs: (bugs.filter(x => accepted.includes(x))).length,
            acceptedChores: (chores.filter(x => accepted.includes(x))).length,
            acceptedFeatures: (features.filter(x => accepted.includes(x))).length,
            rejectedBugs: (bugs.filter(x => rejected.includes(x))).length,
            rejectedChores: (chores.filter(x => rejected.includes(x))).length,
            rejectedFeatures: (features.filter(x => rejected.includes(x))).length,
        })
    }


    getStoriesByStoryType(stories, storyType) {
        return stories.filter(story => {
            return story.story_type === storyType;
        })
    }

    getStoriesByState(stories, storyState) {
        return stories.filter(story => {
            return story.current_state === storyState;
        })
    }


    async getStoriesInCurrentSprint(projectId, sprintNo) {
        let output = await ApiHandler.getStoriesBySprint(projectId, sprintNo);
        return output;
    }


    render() {
        if (this.state.completedStories === null || this.state.totalStories === null) {
            return null;
        } else {
            return(
                <Container>
                   
                    <br />
                    <br />
                    <Table>
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Unscheduled</th>
                                <th>Planned</th>
                                <th>Unstarted</th>
                                <th>Started</th>
                                <th>Finished</th>
                                <th>Delivered</th>
                                <th>Accepted</th>
                                <th>Rejected</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Feature</td>
                                <td>{this.state.unscheduledFeatures}</td>
                                <td>{this.state.plannedFeatures}</td>
                                <td>{this.state.unstartedFeatures}</td>
                                <td>{this.state.startedFeatures}</td>
                                <td>{this.state.finishedFeatures}</td>
                                <td>{this.state.deliveredFeatures}</td>
                                <td>{this.state.acceptedFeatures}</td>
                                <td>{this.state.rejectedFeatures}</td>
                            </tr>
                            <tr>
                                <td>Chore</td>
                                <td>{this.state.unscheduledChores}</td>
                                <td>{this.state.plannedChores}</td>
                                <td>{this.state.unstartedChores}</td>
                                <td>{this.state.startedChores}</td>
                                <td>{this.state.finishedChores}</td>
                                <td>{this.state.deliveredChores}</td>
                                <td>{this.state.acceptedChores}</td>
                                <td>{this.state.rejectedChores}</td>
                            </tr>
                            <tr>
                                <td>Bugs</td>
                                <td>{this.state.unscheduledBugs}</td>
                                <td>{this.state.plannedBugs}</td>
                                <td>{this.state.unstartedBugs}</td>
                                <td>{this.state.startedBugs}</td>
                                <td>{this.state.finishedBugs}</td>
                                <td>{this.state.deliveredBugs}</td>
                                <td>{this.state.acceptedBugs}</td>
                                <td>{this.state.rejectedBugs}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <br />
                    <br />
                    <h3>Stories to be featured in the upcoming review </h3>
                    <br />
                    <br />
                    <ReviewDetailsTable stories={this.state.completedStories}/>
                </Container>
            )
        }
        
    }

}

export default ReviewDetails;