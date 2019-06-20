import React from 'react';
import Configure from './components/Configure/Configure';
import ConfigurationController from './controllers/ConfigurationController';
import { Tabs, Tab, Container } from 'react-bootstrap';
import Home from './components/Home/Home';
import JBHead from './components/JBHead/JBHead';
import SprintInfo from './components/SprintInfo/SprintInfo';
import ReviewDetails from './components/ReviewDetails/ReviewDetails';
import Constants from './constants/constants';
import ApiHandler from './api/ApiHandler';
import Footer from './components/Footer/Footer';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.projectId = Constants.PROJECT_ID;
    this.sprintNo = this.props.match.params.sprintno;
  }

  async componentDidMount() {
    const sprintDataRes = await ConfigurationController.getSprintBySprintNo(this.projectId, this.sprintNo);
    const sprintInfoRes = await ApiHandler.getProjectDetails(this.projectId);
    const configRes = await ConfigurationController.getConfiguration(this.projectId);
    this.setState({
      sprintData: sprintDataRes.data,
      sprintInfo: sprintInfoRes,
      isReleaseTaggingEnabled: configRes.data.release_tagging,
      isReviewTaggingEnabled: configRes.data.review_tagging,
      isFeatureTaggingEnabled: configRes.data.feature_tagging,
      isChoreTaggingEnabled: configRes.data.chore_tagging,
      isBugfixTaggingEnabled: configRes.data.bugfix_tagging
    })
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
            <Tab eventKey="reviewDetails" title="Sprint Review">
              <ReviewDetails pid={this.projectId} data={this.state}/>
            </Tab>
          </Tabs>
          <br />
          <br />
          <Footer />
        </Container>
      );
    }
  }
}

export default App;
