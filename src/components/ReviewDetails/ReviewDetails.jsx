import React from 'react';
import ApiHandler from '../../api/ApiHandler';
import PTConstants from '../../constants/PTConstants';
import { Container } from 'react-bootstrap';
import ReviewDetailsTable from './ReviewDetailsTable';
import MembershipController from '../../controllers/MembershipController';

class ReviewDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sprintNo: this.props.data.sprintData.sprint_no,
            projectId: this.props.pid,
            completedStories: null
        }

        this.getStoriesInCurrentSprint = this.getStoriesInCurrentSprint.bind(this)
    }

    async componentDidMount() {
        let output = await this.getStoriesInCurrentSprint(this.state.projectId, this.state.sprintNo);
        let accepted = this.getAcceptedStoriesList(output.stories.stories);
        this.setState({
            completedStories: accepted
        })
    }

    getAcceptedStoriesList(stories) {
        return stories.filter(story => {
            return story.current_state === PTConstants.STORY_STATE.ACCEPTED
        })
    }

    async getStoriesInCurrentSprint(projectId, sprintNo) {
        return await ApiHandler.getStoriesBySprint(projectId, sprintNo);
    }

    render() {
        if (this.state.completedStories === null) {
            return null;
        } else {
            return(
                <Container>
                    <h3>Stories to be featured in the upcoming review </h3>
                    <ReviewDetailsTable stories={this.state.completedStories}/>
                </Container>
            )
        }
        
    }

}

export default ReviewDetails;