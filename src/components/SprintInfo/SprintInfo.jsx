import React from 'react';
import ApiHandler from '../../api/ApiHandler';

import SprintInfoTable from './SprintInfoTable';
import ProjectMembershipUtil from '../../utils/ProjectMemberUtil';

class SprintInfo extends React.Component {
    constructor(props) {
        super(props);
        
        this.owners = ['MK', 'SE', 'KR', 'SIB'];

        this.assignOwnerStories = this.assignOwnerStories.bind(this);
    }

    assignOwnerStories(projectId, sprintNo, owners) {
        let pArr = owners.map(owner => {
            return ApiHandler.getStoriesBySprintAndUser(projectId, sprintNo, owner)
                .then(stories => {
                    return {owner: owner, stories: stories.stories};
                });
        })

        Promise.all(pArr).then(owners => {
            this.setState({
                owners: owners 
            })
        })
    
    }

    componentWillReceiveProps(nextProps) {
        let sprintNo = nextProps.data.sprintData.sprint_no;
        let projectId = nextProps.pid;

        this.assignOwnerStories(projectId, sprintNo, this.owners);
        
        this.setState({
            sprintNo: nextProps.data.sprintData.sprint_no,
            projectId: nextProps.pid
        })
        
    }

    render() {
        if (this.state == null) {
            return null;
        } else {
            return (
                <SprintInfoTable owners={this.state.owners} />
            )
        }
    }
}

export default SprintInfo;