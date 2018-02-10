import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Dashboard!..</h2>
      </div>
    );
  }
}

export default connect(null, actions)(Dashboard);
