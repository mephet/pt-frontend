import React from 'react';
import { Button, Container, Row, Col, Form, FormControl, FormGroup } from 'react-bootstrap';
import Constants from '../../constants';
import ConfigurationController from '../../controllers/ConfigurationController';
// import './Configure.css';

class Configure extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projectId: 2345186,
            isReleaseTaggingEnabled: false,
            isReviewTaggingEnabled: false,
            isFeatureTaggingEnabled: false,
            isChoreTaggingEnabled: false,
            isBugfixTaggingEnabled: false
        }
    }

    componentDidMount() {
        ConfigurationController.getConfiguration(this.state.projectId).then(res => {
            this.setState({
                isReleaseTaggingEnabled: res.data.release_tagging,
                isReviewTaggingEnabled: res.data.review_tagging,
                isFeatureTaggingEnabled: res.data.feature_tagging,
                isChoreTaggingEnabled: res.data.chore_tagging,
                isBugfixTaggingEnabled: res.data.bugfix_tagging
            })
            console.log(this.state);
        })
    }

    handleCheckboxToggle = (toggleType) => {
        switch(toggleType) {
            case Constants.TOGGLE_RELEASE_TAGGING:
                this.setState({
                    isReleaseTaggingEnabled: !this.state.isReleaseTaggingEnabled
                });
                break;
            case Constants.TOGGLE_REVIEW_TAGGING:
                this.setState({
                    isReleaseTaggingEnabled: !this.state.isReviewTaggingEnabled
                });
                break;
            case Constants.TOGGLE_FEATURE_TAGGING:
                this.setState({
                    isFeatureTaggingEnabled: !this.state.isFeatureTaggingEnabled
                });
                break;
            case Constants.TOGGLE_CHORE_TAGGING:
                this.setState({
                    isChoreTaggingEnabled: !this.state.isChoreTaggingEnabled
                });
                break;
            case Constants.TOGGLE_BUGFIX_TAGGING:
                this.setState({
                    isBugfixTaggingEnabled: !this.state.isBugfixTaggingEnabled
                });
                break;
            default:
                break;
        }
    }

    handleSaveChanges = () => {
        ConfigurationController.updateConfigurations(this.state);
    }

    render() {
        return (
            <Container>
                <br />
                <Row className="tag-list-text">
                    <Col md="auto">
                        <FormGroup controlId="formConfiguration">
                                <h2>Enable tagging on sprint event</h2>
                                <Form.Check checked={this.state.isReleaseTaggingEnabled} type="checkbox" onClick={() => this.handleCheckboxToggle(Constants.TOGGLE_RELEASE_TAGGING)} label="Enable Release Tagging" />
                                <Form.Check checked={this.state.isReviewTaggingEnabled} type="checkbox" onClick={() => this.handleCheckboxToggle(Constants.TOGGLE_REVIEW_TAGGING)} label="Enable Review Tagging" />
                                <h2>Enable tagging on story type</h2>
                                <Form.Check checked={this.state.isFeatureTaggingEnabled} type="checkbox" onClick={() => this.handleCheckboxToggle(Constants.TOGGLE_FEATURE_TAGGING)} label="Enable Feature Tagging" />
                                <Form.Check checked={this.state.isChoreTaggingEnabled} type="checkbox" onClick={() => this.handleCheckboxToggle(Constants.TOGGLE_CHORE_TAGGING)} label="Enable Chore Tagging" />
                                <Form.Check checked={this.state.isBugfixTaggingEnabled} type="checkbox" onClick={() => this.handleCheckboxToggle(Constants.TOGGLE_BUGFIX_TAGGING)} label="Enable Bugfix Tagging" />
                        </FormGroup>
                        <Button onClick={this.handleSaveChanges}>Save Changes</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Configure;