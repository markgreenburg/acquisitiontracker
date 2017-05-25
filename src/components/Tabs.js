// @flow
/**
 * This tab component recognizes and renders the current active tab
 * It has full access to the Redux store
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  addDeal,
  editDeal,
  deleteDeal,
  changeTab,
  changeDeal,
  addContact,
  editContact,
  deleteContact,
} from '../actions/index';
import Dashboard from './Dashboard';
import Pipeline from './Pipeline';
import DealDetails from './DealDetails';

/**
 * Functional React component that controls which tab renders in content body
 * @param {object} props Functions and values passed down from Header component
 */
const Tabs = (props) => {
  switch (props.activeTab) {
    case 'dashboardTab':
      return (<Dashboard deals={props.deals} />);
    case 'pipelineTab':
      return (
        <Pipeline
          deals={props.deals}
          addDeal={props.addDeal}
          editDeal={props.editDeal}
          deleteDeal={props.deleteDeal}
          changeTab={props.changeTab}
          changeDeal={props.changeDeal}
        />
      );
    case 'dealTab':
      return (
        <DealDetails
          currentDealId={props.currentDealId}
          deal={props.deals.find(deal => deal.id === props.currentDealId)}
          contacts={props.contacts}
          addDeal={props.addDeal}
          editDeal={props.editDeal}
          deleteDeal={props.deleteDeal}
          changeTab={props.changeTab}
          changeDeal={props.changeDeal}
          addContact={props.addContact}
          editContact={props.editContact}
          deleteContact={props.deleteContact}
        />
      );
    default:
      return (
        <Pipeline
          deals={props.deals}
          addDeal={props.addDeal}
          editDeal={props.editDeal}
          deleteDeal={props.deleteDeal}
          changeTab={props.changeTab}
          changeDeal={props.changeDeal}
        />
      );
  }
};

/* Add proptype checks Tabs component */
Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  deals: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentDealId: PropTypes.number.isRequired,
  addDeal: PropTypes.func.isRequired,
  editDeal: PropTypes.func.isRequired,
  deleteDeal: PropTypes.func.isRequired,
  changeTab: PropTypes.func.isRequired,
  changeDeal: PropTypes.func.isRequired,
  addContact: PropTypes.func.isRequired,
  editContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

/**
 * Give the component access to Redux store's state via props
 * @param {object} state current Redux store object
 */
// TO-DO: Fix undefined for find contacts (init for new companies)
const mapStateToProps = (state) => {
  const requiredState = {
    contacts: state.deals
      .find(deal => deal.id === state.currentDealId)
      .contacts,
    activeTab: state.activeTab,
    deals: state.deals,
    currentDealId: state.currentDealId,
  };
  return requiredState;
};

/**
 * Give the component access to Redux actions via props
 * @param {function} dispatch function that allows execution of Redux actions
 */
const mapDispatchToProps = (dispatch) => {
  const validActions = {
    addDeal: deal => dispatch(addDeal(deal)),
    addContact: contact => dispatch(addContact(contact)),
    editContact: contact => dispatch(editContact(contact)),
    deleteContact: contact => dispatch(deleteContact(contact)),
    editDeal: deal => dispatch(editDeal(deal)),
    deleteDeal: deal => dispatch(deleteDeal(deal)),
    changeTab: tab => dispatch(changeTab(tab)),
    changeDeal: dealId => dispatch(changeDeal(dealId)),
  };
  return validActions;
};

/* Connect module to Redux state, store and export */
export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
