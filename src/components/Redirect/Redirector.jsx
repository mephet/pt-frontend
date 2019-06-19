import React from 'react';
import  { Redirect } from 'react-router-dom'
import Constants from '../../constants/constants';
import ApiHandler from '../../api/ApiHandler';


class Redirector extends React.Component {
    constructor(props) {
        super(props);

        this.projectId = Constants.PROJECT_ID;
    }

    async componentDidMount() {
        const sprintInfoRes = await ApiHandler.getProjectDetails(this.projectId);
        this.setState({
            sprintInfo: sprintInfoRes,
        })
    }

    render() {
        if (this.state === null) {
            return null
        } else {
            return(
                <Redirect to={`/sprint/${this.state.sprintInfo.current_iteration_number}`}  />
            )
        }
        
    }
}

export default Redirector;