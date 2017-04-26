/**
 * This tab component recognizes and renders the current active tab
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addDeal, editDeal, deleteDeal, changeTab } from '../actions/index';

// 1. Get active tab from store
// 2. Conditionally render the corresponding subcomponent
// 3. Set active tab style to current active tab

const Tabs = (props) => {
  const container = (
    <div className="container">
      <p>Tabs Go Here</p>
    </div>
  );
  return container;
};

// Add proptype checks for the component to prevent issues down the road
Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  deals: PropTypes.arrayOf(PropTypes.object),
};

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

module.exports = connect(mapStateToProps, mapDispatchToProps)(Tabs);
