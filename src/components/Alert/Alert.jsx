import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class AlertModal extends React.Component {
    render() {
        return (
            <Modal
                {...this.props}
                size='lg'
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Saved Configuration
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Configuration changes have been successfully saved!
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default AlertModal;