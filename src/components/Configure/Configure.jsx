import React from 'react';
import { Button, Container, Row, Col, Form, FormGroup } from 'react-bootstrap';
import Constants from '../../constants';
import ConfigurationController from '../../controllers/ConfigurationController';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import AlertModal from '../Alert/Alert';
// import './Configure.css';

class Configure extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalShow: false,
            sprintNo: this.props.sprintno,
            isReleaseTaggingEnabled: false,
            isReviewTaggingEnabled: false,
            isFeatureTaggingEnabled: false,
            isChoreTaggingEnabled: false,
            isBugfixTaggingEnabled: false,
            releaseDate: new Date(),
            reviewDate: new Date()
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            sprintNo: nextProps.data.sprintData.sprint_no,
            projectId: nextProps.pid,
            isReleaseTaggingEnabled: nextProps.data.isReleaseTaggingEnabled,
            isReviewTaggingEnabled: nextProps.data.isReviewTaggingEnabled,
            isFeatureTaggingEnabled: nextProps.data.isFeatureTaggingEnabled,
            isChoreTaggingEnabled: nextProps.data.isChoreTaggingEnabled,
            isBugfixTaggingEnabled: nextProps.data.isBugfixTaggingEnabled,
            releaseDate: new Date(nextProps.data.sprintData.release_date),
            reviewDate: new Date(nextProps.data.sprintData.review_date)
        })
        
    }


    handleReleaseDateSelection = (releaseDate) => {
        let date = new Date(releaseDate)
        this.setState({
            releaseDate: date
        })
    }

    handleReviewDateSelection = (reviewDate) => {
        let date = new Date(reviewDate)
        this.setState({
            reviewDate: date
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
                    isReviewTaggingEnabled: !this.state.isReviewTaggingEnabled
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
        this.setState({ modalShow: true });
        ConfigurationController.updateConfigurations(this.state);
    }

    render() {
        let modalClose = () => this.setState({modalShow: false});
        return (
            <Container>
                <AlertModal 
                    show={this.state.modalShow}    
                    onHide={modalClose}
                />
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
                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup controlId="dateConfiguration">
                            <h2>Next Release Date</h2>
                            <DatePicker
                                selected={this.state.releaseDate}
                                onChange={this.handleReleaseDateSelection}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup controlId="dateConfiguration">
                            <h2>Next Review Date</h2>
                            <DatePicker
                                selected={this.state.reviewDate}
                                onChange={this.handleReviewDateSelection}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Button onClick={this.handleSaveChanges}>Save Changes</Button>
            </Container>
        )
    }
}

export default Configure;