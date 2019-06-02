import React from 'react';
import {Accordion, Row, Card, Col, Container} from 'react-bootstrap';
import SprintInfoItem from './SprintInfoItem';

class SprintInfoTable extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            userStories: this.props.userStories
        }
        console.log(this.state.userStories);
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
                                                    <Col>
                                                    { owner.stories.total_points }
                                                    </Col>
                                                    <Col>
                                                    { owner.stories.total_points_completed }
                                                    </Col>
                                                    <Col>
                                                    `{ owner.stories.total_points } / { owner.stories.total_points_completed }`
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