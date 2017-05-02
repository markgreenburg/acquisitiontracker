import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Displays the glyphicon and handles click events in the 'more details' cells
 */
class More extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * Dispatches 'CHANGE_TAB' and 'CHANGE_DEAL' action creators on button click
   * @param {object} event click event
   */
  handleClick(event) {
    event.preventDefault();
    this.props.changeTab('dealTab');
    this.props.changeDeal(this.props.rowId);
  }

  render() {
    return (
      <button className="btn btn-sm btn-info" onClick={this.handleClick}>
        <i className="glyphicon glyphicon-chevron-right" />
      </button>);
  }
}

More.propTypes = {
  rowId: PropTypes.number.isRequired,
  changeTab: PropTypes.func.isRequired,
  changeDeal: PropTypes.func.isRequired,
};

export default More;
