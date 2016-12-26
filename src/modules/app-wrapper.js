import React, { Component } from 'react';
import { withRouter } from 'react-router';
import BoardModule from './board'
class AppWrapper extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {

  }

  render() {
    return (
      <div id="container" class="container-fluid">
        <div>
          <nav class="navbar navbar-default">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand" href="#">Project Management Board</a>
              </div>
            </div>
          </nav>
          <div class="row">
            <div class="col-md-12">
              <BoardModule.wrapper />
            </div>
          </div>
        </div>

      </div>
    );
  }
}
export default withRouter(AppWrapper);