import React from 'react';
import PTConstants from '../../constants/PTConstants';
import { Badge } from 'react-bootstrap';

function StoryBadgeState({storyState}) {
    switch(storyState) {
        case PTConstants.STORY_STATE.UNSTARTED:
            return (
                <Badge variant="light">
                    {storyState}
                </Badge>
            )
        case PTConstants.STORY_STATE.STARTED:
            return (
                <Badge variant="secondary">
                    {storyState}
                </Badge>
            )
        case PTConstants.STORY_STATE.FINISHED:
            return (
                <Badge variant="primary">
                    {storyState}
                </Badge>
            )
        case PTConstants.STORY_STATE.DELIVERED:
            return (
                <Badge variant="warning">
                    {storyState}
                </Badge>
            )
        case PTConstants.STORY_STATE.ACCEPTED:
            return (
                <Badge variant="success">
                    {storyState}
                </Badge>
            )
        case PTConstants.STORY_STATE.REJECTED:
            return (
                <Badge variant="danger">
                    {storyState}
                </Badge>
            )
    }
}

export default StoryBadgeState;