// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeTab } from '../actions/index';

/**
 * React component that displays the page header and navigation
 */
class Header extends Component {
  constructor(props) {
    super(props);
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  /**
   * Gets ID of tab clicked and dispatches CHANGE_TAB action to store
   * @param {object} event click event
   */
  handleTabClick(event) {
    event.preventDefault();
    const tabId = event.target.id;
    this.props.changeTab(tabId);
  }

  render() {
    // Define some reusable snippets for the tab controls
    const tabIds = ['dashboardTab', 'pipelineTab', 'dealTab'];
    const tabStrings = {
      dashboardTab: 'Dashboard',
      pipelineTab: 'Pipeline',
      dealTab: 'Deal Details',
    };

    // Make a 'button' for each tab to keep things DRY
    const tabsList = tabIds.map((current) => {
      const anchor = (
        <a href={`# ${current}`} id={current} onClick={this.handleTabClick}>
          {tabStrings[current]}
        </a>
      );
      // Set active styling in sync with state
      return (current === this.props.activeTab
        ? (<li key={current} className="active">{anchor}</li>)
        : (<li key={current}>{anchor}</li>)
      );
    });

    // Define the main header's DOM elements
    const headerDiv = (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand">Some &amp; Company</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              {tabsList}
            </ul>
          </div>
        </div>
      </nav>
    );
    return headerDiv;
  }
}

/* Add proptype checks for Header component */
Header.propTypes = {
  activeTab: PropTypes.string.isRequired,
  changeTab: PropTypes.func.isRequired,
};

/**
 * Give the component access to Redux store's state via props
 * @param {object} state current Redux store object
 */
const mapStateToProps = (state) => {
  const requiredState = {
    activeTab: state.activeTab,
  };
  return requiredState;
};

/**
 * Give the component access to Redux actions via props
 * @param {function} dispatch function that allows execution of Redux actions
 */
const mapDispatchToProps = (dispatch) => {
  const validActions = {
    changeTab: tab => dispatch(changeTab(tab)),
  };
  return validActions;
};

/* Give module access to Redux */
export default connect(mapStateToProps, mapDispatchToProps)(Header);
