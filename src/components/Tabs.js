/**
 * This tab component recognizes and renders the current active tab
 * It has full access to the Redux store
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addDeal, editDeal, deleteDeal, changeTab } from '../actions/index';
import Dashboard from './Dashboard';
import DealList from './DealList';
import DealDetails from './DealDetails';

// Define tab handler as stateless component
// The different tab names are defined by IDs in Header component
const Tabs = (props) => {
  switch (props.activeTab) {
    case 'dashboardTab':
      return (<Dashboard deals={props.deals} />);
    case 'dealListTab':
      return (
        <DealList
          deals={props.deals}
          addDeal={props.addDeal}
          editDeal={props.editDeal}
          deleteDeal={props.deleteDeal}
        />
      );
    case 'dealTab':
      return (<DealDetails />);
    default:
      return (<DealDetails />);
  }
};

// Add proptype checks to prevent inadvertently breaking stuff
Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  deals: PropTypes.arrayOf(PropTypes.object).isRequired,
  addDeal: PropTypes.func.isRequired,
  editDeal: PropTypes.func.isRequired,
  deleteDeal: PropTypes.func.isRequired,
};

// Give the component access to Redux actions, store via props
const mapStateToProps = (state) => {
  const requiredState = {
    activeTab: state.activeTab,
    deals: state.deals,
  };
  return requiredState;
};

const mapDispatchToProps = (dispatch) => {
  const validActions = {
    addDeal: deal => dispatch(addDeal(deal)),
    editDeal: deal => dispatch(editDeal(deal)),
    deleteDeal: deal => dispatch(deleteDeal(deal)),
    changeTab: tab => dispatch(changeTab(tab)),
  };
  return validActions;
};

// Connect module to Redux state, store and export
module.exports = connect(mapStateToProps, mapDispatchToProps)(Tabs);
