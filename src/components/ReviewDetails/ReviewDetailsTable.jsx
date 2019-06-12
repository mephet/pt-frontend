import React from 'react';
import { Table, Container } from 'react-bootstrap';
import ReviewDetailsItem from './ReviewDetailsItem';
import ReviewDetailsOwner from './ReviewDetailsOwner';
import ReviewDetailsLabelBadge from './ReviewDetailsLabelBadge';

function ReviewDetailsTable({stories}) {
    console.log(stories);
    return (
        <Table>
            <thead>
                <tr>
                    <th>Story ID</th>
                    <th>Owner</th>
                    <th>Story Details</th>
                    <th>Labels</th>
                </tr>
            </thead>
            <tbody>
                {stories.map((story, idx) => {
                    return(
                        <tr key={idx}>
                            <td>{story.id}</td>
                            <td>
                                <ReviewDetailsOwner ownerIds={story.owner_ids} />
                            </td>
                            <td>
                                <ReviewDetailsItem storyInfo={story} idx={idx}/>
                            </td>
                            <td>
                                {story.labels.map((label, idx) => {
                                    return (
                                        <Container>
                                            <ReviewDetailsLabelBadge key={idx} label={label} />
                                            <br />
                                        </Container>
                                    )
                                })}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
    
}

export default ReviewDetailsTable;