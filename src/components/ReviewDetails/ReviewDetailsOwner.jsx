import React from 'react';
import MembershipController from "../../controllers/MembershipController";
import { Container } from 'react-bootstrap';

class ReviewDetailsOwner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            members: null
        }
    }

    async componentDidMount() {
        let pArr = this.props.ownerIds.map(ownerId => {
            return MembershipController.getPersonFromId(ownerId);
        })
        Promise.all(pArr).then(res => {
            this.setState({
                members: res
            });
        });
    }
    
    render() {
        if (this.state.members === null) {
            return null;
        } else {
            return(
                <ul>
                    {this.state.members.map((member, idx) => {
                        return (<li key={idx}>{member[0].person.name}</li>)
                    })}
                </ul>
            )
        }
    }
}

export default ReviewDetailsOwner;