import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
class ModalWrapper extends Component {
    onCreateBoardClick() {
        let boardData = {
            boardName: this.refs.txtboardname.value
        }
        this.props.createBoard(boardData)
    }

    render() {
        const {boardModalBool, onModalClose, title} = this.props;
        return (
            <div>
                <Modal show={boardModalBool} onHide={onModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form class="form-horizontal">
                            <div class="form-group">
                                <label class="col-md-3 control-label" for="txtboardname">Name</label>
                                <div class="col-md-9">
                                    <input ref="txtboardname" name="txtboardname" type="text" class="form-control input-md" required="" />
                                </div>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={onModalClose}>
                            Close
                        </Button>
                        <Button onClick={() => { this.onCreateBoardClick() } }>
                            Save changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
export default ModalWrapper;