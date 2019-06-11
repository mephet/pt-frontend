import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import StoryBadge from '../SprintInfo/StoryBadge';

function ReviewDetailsItem({storyInfo, idx}) {
    return(
        <Accordion>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Card} eventKey={idx}>
                    <StoryBadge storyState={storyInfo.current_state} storyType={storyInfo.story_type} points={storyInfo.estimate} storyTitle={storyInfo.name}/>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={idx}>
                    <Card.Body>
                        <Card.Subtitle>{`${storyInfo.description}`}</Card.Subtitle>
                        <a href={storyInfo.url} target="_blank"  rel="noopener noreferrer">Go to story</a>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default ReviewDetailsItem;