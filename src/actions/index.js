/**
 * This module defines action types for Redux
 */

export const addDeal = (dealObject) => {
  const addDealAction = {
    type: 'ADD_DEAL',
    payload: dealObject,
  };
  return addDealAction;
};

export const editDeal = (dealObject) => {
  const editDealAction = {
    type: 'EDIT_DEAL',
    payload: dealObject,
  };
  return editDealAction;
};

export const deleteDeal = (dealObject) => {
  const deleteDealAction = {
    type: 'DELETE_DEAL',
    payload: dealObject,
  };
  return deleteDealAction;
};

export const changeTab = (tabId) => {
  const changeTabAction = {
    type: 'CHANGE_TAB',
    payload: tabId,
  };
  return changeTabAction;
};

export const changeDeal = (dealId) => {
  const changeDealAction = {
    type: 'CHANGE_DEAL',
    payload: dealId,
  };
  return changeDealAction;
};
