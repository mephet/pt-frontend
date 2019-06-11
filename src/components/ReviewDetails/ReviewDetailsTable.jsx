import React from 'react';
import { Table } from 'react-bootstrap';
import ReviewDetailsItem from './ReviewDetailsItem';
import ReviewDetailsOwner from './ReviewDetailsOwner';

function ReviewDetailsTable({stories}) {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Story ID</th>
                    <th>Owner</th>
                    <th>Story Details</th>
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
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
    
}

export default ReviewDetailsTable;