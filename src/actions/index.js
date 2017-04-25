/**
 * This module defines action types for Redux
 */

const addDeal = (dealObject) => {
  const addDealAction = {
    type: 'ADD_DEAL',
    payload: dealObject,
  };
  return addDealAction;
};

const editDeal = (dealObject) => {
  const editDealAction = {
    type: 'EDIT_DEAL',
    payload: dealObject,
  };
  return editDealAction;
};

const deleteDeal = (dealObject) => {
  const deleteDealAction = {
    type: 'DELETE_DEAL',
    payload: dealObject,
  };
  return deleteDealAction;
};

module.exports = {
  addDeal,
  editDeal,
  deleteDeal,
};
