import React from 'react';
import Configure from './components/Configure/Configure';
import { Tabs, Tab, Container } from 'react-bootstrap';
import Home from './components/Home/Home';
import JBHead from './components/JBHead';

function App() {
  return (
    <Container>
      <JBHead></JBHead>
      <Tabs defaultActiveKey="home">
        <Tab eventKey="home" title="Current Sprint">
          <Home />
        </Tab>
        <Tab eventKey="configure" title="Configure">
          <Configure />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default App;
