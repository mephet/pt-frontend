import React from 'react';
import Configure from './components/Configure/Configure';
import ConfigurationController from './controllers/ConfigurationController';
import { Tabs, Tab, Container } from 'react-bootstrap';
import Home from './components/Home/Home';
import JBHead from './components/JBHead/JBHead';
import SprintInfo from './components/SprintInfo/SprintInfo';
import Constants from './constants';
import ApiHandler from './api/ApiHandler';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.projectId = Constants.PROJECT_ID;
  }

  componentDidMount() {
    ConfigurationController.getLatestSprint(this.projectId).then(res => {
      this.setState({
        sprintData: res.data
      })
    });
    ApiHandler.getProjectDetails(this.projectId).then(res => {
      this.setState({
        sprintInfo: res
      })
    })
    ConfigurationController.getConfiguration(this.projectId).then(res => {
      this.setState({
        isReleaseTaggingEnabled: res.data.release_tagging,
        isReviewTaggingEnabled: res.data.review_tagging,
        isFeatureTaggingEnabled: res.data.feature_tagging,
        isChoreTaggingEnabled: res.data.chore_tagging,
        isBugfixTaggingEnabled: res.data.bugfix_tagging
      })
    });
  }

  render() {
    if (this.state == null) {
      return null;
    } else {
      return (
        <Container>
          <JBHead></JBHead>
          <Tabs defaultActiveKey="home">
            <Tab eventKey="home" title="Current Sprint">
              <Home pid={this.projectId} data={this.state}/>
            </Tab>
            <Tab eventKey="configure" title="Configure">
              <Configure pid={this.projectId} data={this.state}/>
            </Tab>
            <Tab eventKey="sprintinfo" title="Sprint Details">
              <SprintInfo pid={this.projectId} data={this.state} />
            </Tab>
          </Tabs>
        </Container>
      );
    }
  }
}

export default App;
