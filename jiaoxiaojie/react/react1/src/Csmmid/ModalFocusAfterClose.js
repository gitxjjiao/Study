import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, Label, Input, FormGroup, Form } from 'reactstrap';
import './Top.css';
class ModalFocusAfterClose extends React.Component {
    constructor() {
        super();
        this.state = {
            open: true,
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState(({ open }) => ({ open: !open }));
    }
    render() {
        return (
            <div>
                <Modal isOpen={this.state.open}>
                    <ModalBody>
                        Observe the Open button. It will be focused after close when returnFocusAfterClose is true and will not be focused if returnFocusAfterClose is false.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>关闭</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default ModalFocusAfterClose;