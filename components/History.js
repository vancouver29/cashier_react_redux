import React, { Component } from "react";
import { connect } from "react-redux";
import { undo, redo } from "../reducers/actions";

class History extends Component {
  total() {
    return this.props.items.reduce((total, item) => {
      return total + item.price;
    }, 0);
  }

  render() {
    return (
      <div id="history-controls">
        <button onClick={this.props.undo}>undo</button>
        <button onClick={this.props.redo}>redo</button>
      </div>
    );
  }
}

function mapDispathToProps(dispatch) {
  return {
    undo: () => dispatch(undo()),
    redo: () => dispatch(redo()),
  };
}

export default connect(null, mapDispathToProps)(History);
