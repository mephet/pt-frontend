import React from 'react';
import PTConstants from '../../constants/PTConstants';
import { Badge, Container, Row } from 'react-bootstrap';
import StoryBadgeState from './StoryBadgeState';

function StoryBadge({storyState, storyType, points, storyTitle}) {
    switch(storyType) {
        case PTConstants.STORY_TYPE.FEATURE:
            return (
                <Container>
                    <Row>
                        <h5>
                            <Badge variant="warning">
                                {storyType} &nbsp;
                                <Badge variant="light">{points}</Badge>
                            </Badge>
                            &nbsp;
                            <StoryBadgeState storyState={storyState} />
                        </h5>
                    </Row>
                    <Row><h5>{storyTitle}</h5></Row>
                </Container>
            )
        case PTConstants.STORY_TYPE.CHORE:
            return (
                <Container>
                    <Row>
                        <h5>
                            <Badge variant="secondary">
                                {storyType} &nbsp;
                                <Badge variant="light">{points}</Badge>
                            </Badge>
                            &nbsp;
                            <StoryBadgeState storyState={storyState} />
                        </h5>
                    </Row>
                    <Row><h5>{storyTitle}</h5></Row>
                </Container>
            )
        case PTConstants.STORY_TYPE.BUGFIX:
            return (
                <Container>
                    <Row>
                        <h5>
                            <Badge variant="danger">
                                {storyType} &nbsp;
                                <Badge variant="light">{points}</Badge>
                            </Badge>
                            &nbsp;
                            <StoryBadgeState storyState={storyState} />
                        </h5>
                    </Row>
                    <Row><h5>{storyTitle}</h5></Row>
                </Container>
            )
        default:
            return null;
    }
}

export default StoryBadge;