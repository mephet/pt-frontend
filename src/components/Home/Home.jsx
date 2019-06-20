import React, { Component } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import TimerUtil from '../../utils/TimerUtil';
import './Home.css';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sprintData: props.data.sprintData,
      sprintInfo: props.data.sprintInfo,
      timeToRelease: Math.floor((new Date(props.data.sprintData.release_date).getTime() - Date.now()) / 1000),
      timeToReview: Math.floor((new Date(props.data.sprintData.review_date).getTime() - Date.now()) / 1000)
    }

    this.startTimer = this.startTimer.bind(this);
    this.getCountdownString = this.getCountdownString.bind(this);
    this.startTimer();
  }

  startTimer() {
    this.timer = setInterval(() => this.getCountdownString(), 1000)
  }

  getCountdownString() {
    this.setState({
      timeToRelease: this.state.timeToRelease - 1,
      timeToReview: this.state.timeToReview - 1,
      countdownRelease: this.state.timeToRelease <= 0 ? "Release Reached" : TimerUtil.getCountdownString(this.state.timeToRelease),
      countdownReview: this.state.timeToReview <= 0 ? "Review Reached" : TimerUtil.getCountdownString(this.state.timeToReview),
    })
  }
  
  render() {

    if (this.state == null) {
      return null
    } else { 
      return (
          <Container>
            <br />
            <br />
            <Row>
              <Col>
                <Card className="sprint-card" bg="success" text="white" style={{ width: '16rem'}}>
                  <Card.Body>
                    <Card.Text>
                    { this.state.sprintInfo.name }
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="sprint-card" bg="success" text="white" style={{ width: '16rem'}}>
                  <Card.Body>
                    <Card.Text>
                      Sprint { this.state.sprintData.sprint_no }
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Card className="date-card" bg="primary" text="white" style={{ width: '20rem'}}>
                  <Card.Body>
                    <Card.Text>
                      Next Release Date:
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="date-card" bg="primary" text="white" style={{ width: '20rem'}}>
                  <Card.Body>
                    <Card.Text>
                      Next Review Date:
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="date-card" bg="primary" text="white" style={{ width: '20rem'}}>
                  <Card.Body>
                    <Card.Text>
                      {new Date(Date.parse(this.state.sprintData.release_date)).toDateString()}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="date-card" bg="primary" text="white" style={{ width: '20rem'}}>
                  <Card.Body>
                    <Card.Text>
                      {new Date(Date.parse(this.state.sprintData.review_date)).toDateString()}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Card className="date-card" bg="info" text="white" style={{ width: '20rem'}}>
                  <Card.Body>
                    <Card.Text>
                      Time till Release Date:
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="date-card" bg="info" text="white" style={{ width: '20rem'}}>
                  <Card.Body>
                    <Card.Text>
                      Time till Review Date:
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="date-card" bg="info" text="white" style={{ width: '20rem'}}>
                  <Card.Body>
                    <Card.Text>
                      { this.state.countdownRelease }
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="date-card" bg="info" text="white" style={{ width: '20rem'}}>
                  <Card.Body>
                    <Card.Text>
                      { this.state.countdownReview }
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
      );
    }
  }
}

export default Home;