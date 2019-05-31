import React from 'react';
import {Accordion, Button, Card, ListGroup, Badge} from 'react-bootstrap';

class SprintInfoTable extends React.Component{
    constructor(props) {
        super(props);

        this.owners = null;
    }

    storyBadge({storyType}) {

    }

    componentWillReceiveProps(nextProps) {
        this.owners = nextProps.owners
      }

    render() {
        if (this.owners == null ) {
            return null;
        } else {
            return (
                <Accordion>
                    {this.owners.map((owner, key) => {
                        return (
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey={key}>
                                    {owner.owner}
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={key}>
                                    <Card.Body>
                                        <ListGroup>
                                            {owner.stories.stories.map(story => {
                                                return (
                                                    <ListGroup.Item>
                                                        {story.name} &nbsp;
                                                        <Badge variant="primary">
                                                            { story.story_type}
                                                        </Badge>
                                                    </ListGroup.Item>
                                                )
                                            })}
                                        </ListGroup>
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