import React, { Component } from 'react';
class BoardContainer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {board} = this.props;
        return (
            <div class="row">
                {board.name}
            </div>
        );
    }
}
export default BoardContainer;
