import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeTab } from '../actions/index';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(event) {
    // 1. get the data-id of the clicked tab
    event.preventDefault();
    const tabId = event.target.id;
    // 2. dispatch active tab info to changeTab action
    this.props.changeTab(tabId);
    // 3. Change the 'active' tab styling
  }

  render() {
    // Define some reusable snippets for the tab controls
    const tabIds = ['dashboardTab', 'dealListTab', 'dealTab', 'addDealTab'];
    const tabStrings = {
      dashboardTab: 'Dashboard',
      dealListTab: 'Deals List',
      dealTab: 'Deal Details',
      addDealTab: 'Add Deal',
    };
    // Make a 'button' for each tab. Set active styling in sync with state.
    const tabsList = tabIds.map((current) => {
      const anchor = (
        <a href={`# ${current}`} id={current} onClick={this.handleTabClick}>
          {tabStrings[current]}
        </a>
      );
      if (current === this.props.activeTab) {
        return (<li className="active">{anchor}</li>);
      }
      return (<li>{anchor}</li>);
    });

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
            <a className="navbar-brand" href="#root">Some &amp; Company</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              {tabsList}
            </ul>
          </div>
        </div>
        <p>Active Tab: {this.props.activeTab}</p>
      </nav>
    );
    return headerDiv;
  }
}

// Add proptype checks for component
Header.propTypes = {
  activeTab: PropTypes.string.isRequired,
  changeTab: PropTypes.func.isRequired,
};

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

module.exports = connect(mapStateToProps, mapDispatchToProps)(Header);
