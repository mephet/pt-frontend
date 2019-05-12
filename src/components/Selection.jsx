import React from 'react';
import { Button, Container, Row, Col, Form, FormControl, FormGroup } from 'react-bootstrap';
import Constants from '../constants';
import ConfigurationController from '../controllers/ConfigurationController';

class Selection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projectId: 1234,
            isReleaseTaggingEnabled: false,
            isFeatureTaggingEnabled: false,
            isChoreTaggingEnabled: false,
            isBugfixTaggingEnabled: false
        }
    }

    handleCheckboxToggle = (toggleType) => {
        switch(toggleType) {
            case Constants.TOGGLE_RELEASE_TAGGING:
                this.setState({
                    isReleaseTaggingEnabled: !this.state.isReleaseTaggingEnabled
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
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <FormGroup controlId="formConfiguration">
                            <Form.Check type="checkbox" onClick={() => this.handleCheckboxToggle(Constants.TOGGLE_RELEASE_TAGGING)} label="Enable Release Tagging" />
                        </FormGroup>
                        <FormGroup controlId="formConfiguration" style={this.state.isReleaseTaggingEnabled ? {} : { display: 'none' }}>
                            <Form.Check type="checkbox" onClick={() => this.handleCheckboxToggle(Constants.TOGGLE_FEATURE_TAGGING)} label="Enable Feature Tagging" />
                            <Form.Check type="checkbox" onClick={() => this.handleCheckboxToggle(Constants.TOGGLE_CHORE_TAGGING)} label="Enable Chore Tagging" />
                            <Form.Check type="checkbox" onClick={() => this.handleCheckboxToggle(Constants.TOGGLE_BUGFIX_TAGGING)} label="Enable Bugfix Tagging" />
                        </FormGroup>
                        <Button onClick={this.handleSaveChanges}>Save Changes</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Selection;