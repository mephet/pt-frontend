import React from 'react';
import ApiHandler from '../../api/ApiHandler';

import SprintInfoTable from './SprintInfoTable';

class SprintInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sprintNo: this.props.data.sprintData.sprint_no,
            projectId: this.props.pid
        }
        
        // this.owners = ['MK', 'SE', 'KR', 'SIB', 'GBK'];
        this.owners = this.props.persons;
        this.assignOwnerStories = this.assignOwnerStories.bind(this);
    }

    componentDidMount() {
        this.assignOwnerStories(this.state.projectId, this.state.sprintNo, this.owners);
    }

    assignOwnerStories(projectId, sprintNo, owners) {
        let pArr = owners.map(owner => {
            return ApiHandler.getStoriesBySprintAndUser(projectId, sprintNo, owner.initials)
                .then(stories => {
                    return {owner: owner.name, stories: stories.stories};
                });
        })

        Promise.all(pArr).then(owners => {
            this.setState({
                userStories: owners
            })
        })
    
    }


    render() {
        if (this.state === null || this.state.userStories === undefined) {
            return null;
        } else {
            return (
                <SprintInfoTable userStories={this.state.userStories} />
            )
        }
    }
}

export default SprintInfo;