import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as Actions from './actions'
import { withRouter } from 'react-router'
import BoardComponents from './components'
import { createBoardThunk } from './thunks'
class BoardWrapper extends Component {
    constructor(props) {
        super(props)
    }
    onCreateBoardClick() {
        this.props.dispatch(Actions.setBoardModalFlag(true))
    }
    onModalClose() {
        this.props.dispatch(Actions.setBoardModalFlag(false))
    }
    createBoard(boardData) {
        this.props.dispatch(createBoardThunk(boardData))
    }
    render() {
        const {boardModalBool, boards} = this.props
        return (
            <div class="row">
                <div class="col-md-4">
                    <ul class="list-group">
                        {
                            boards.map((board) => {
                                return <li key={board.id} class="list-group-item">
                                    <BoardComponents.BoardContainer board={board} />
                                </li>
                            })
                        }
                    </ul>
                    <button type="button" class="btn btn-primary" onClick={() => this.onCreateBoardClick()}>Create Board</button>
                </div>
                <div class="col-md-8">
                </div>
                <BoardComponents.ModalWrapper boardModalBool={boardModalBool} onModalClose={() => this.onModalClose()} createBoard={(boardData) => this.createBoard(boardData)} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        boards: state.BoardModule.boards,
        boardModalBool: state.BoardModule.boardModalBool
    }
}
export default withRouter(connect(mapStateToProps, null)(BoardWrapper))