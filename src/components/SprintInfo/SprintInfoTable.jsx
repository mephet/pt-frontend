import React from 'react';
import {Accordion, Row, Card, Col, Container} from 'react-bootstrap';
import SprintInfoItem from './SprintInfoItem';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class SprintInfoTable extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            userStories: this.props.userStories
        }
    }

    percentageComplete(totalPoints, completedPoints) {
        let completePercent = Math.round(completedPoints/totalPoints * 100);
        return (
            <CircularProgressbar value={completePercent} text={`${completePercent}%`} />
        )
    }
    render() {
        if (this.state.userStories == null) {
            return null;
        } else {
            return (
                <Accordion>
                    {this.state.userStories.map((owner, key) => {
                        return (
                            <Card key={key}>
                                <Accordion.Toggle as={Card.Header} eventKey={key}>
                                    <Card>
                                        <Card.Header as="h5">{owner.owner}</Card.Header>
                                        <Card.Body>
                                            <Container>
                                                <Row>
                                                    <Col xs={4}>
                                                    <Container>
                                                        <Row>
                                                            <Col>Total points: { owner.stories.total_points }</Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>Completed points: { owner.stories.total_points_completed }</Col>
                                                        </Row>
                                                    </Container>
                                                    </Col>
                                                    <Col>
                                                        <Container>
                                                            <Row>
                                                                <Col xs={2}>{this.percentageComplete(owner.stories.total_points, owner.stories.total_points_completed)}</Col>
                                                            </Row>
                                                        </Container>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={key}>
                                    <Card.Body>
                                        {owner.stories.stories.map((story, idx) => {
                                            return <SprintInfoItem storyInfo={story} idx={idx} key={idx} />
                                        })}
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        )
                    })}
                </Accordion>
            )
        }
    }
} 

export default SprintInfoTable;