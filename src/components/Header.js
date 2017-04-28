import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeTab } from '../actions/index';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  // Gets ID of tab clicked and dispatches CHANGE_TAB action to store
  handleTabClick(event) {
    event.preventDefault();
    const tabId = event.target.id;
    this.props.changeTab(tabId);
  }

  render() {
    // Define some reusable snippets for the tab controls
    const tabIds = ['dashboardTab', 'dealListTab', 'dealTab'];
    const tabStrings = {
      dashboardTab: 'Dashboard',
      dealListTab: 'Deals List',
      dealTab: 'Deal Details',
    };

    // Make a 'button' for each tab to keep things DRY.
    const tabsList = tabIds.map((current) => {
      const anchor = (
        <a href={`# ${current}`} id={current} onClick={this.handleTabClick}>
          {tabStrings[current]}
        </a>
      );
      // Set active styling in sync with state.
      if (current === this.props.activeTab) {
        return (<li key={current} className="active">{anchor}</li>);
      }
      return (<li key={current}>{anchor}</li>);
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

// Add proptype checks for component to prevent inadvertent breaking of stuff
Header.propTypes = {
  activeTab: PropTypes.string.isRequired,
  changeTab: PropTypes.func.isRequired,
};

// Pass Redux state and actions to component's props
const mapStateToProps = (state) => {
  const requiredState = {
    activeTab: state.activeTab,
  };
  return requiredState;
};

const mapDispatchToProps = (dispatch) => {
  const validActions = {
    changeTab: tab => dispatch(changeTab(tab)),
  };
  return validActions;
};

// Connect handles the actual hooking up of the component to the store.
// It's just a layer on top of Redux's subscribe() method, I think.
module.exports = connect(mapStateToProps, mapDispatchToProps)(Header);
