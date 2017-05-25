/**
 * This module defines action types for Redux
 */
// @flow

export const addDeal = dealObject => ({
  type: 'ADD_DEAL',
  payload: dealObject,
});

export const editDeal = dealObject => ({
  type: 'EDIT_DEAL',
  payload: dealObject,
});

export const deleteDeal = dealObject => ({
  type: 'DELETE_DEAL',
  payload: dealObject,
});

export const changeTab = tabId => ({
  type: 'CHANGE_TAB',
  payload: tabId,
});

export const changeDeal = dealId => ({
  type: 'CHANGE_DEAL',
  payload: dealId,
});

export const addContact = contactObj => ({
  type: 'ADD_CONTACT',
  payload: contactObj,
});

export const editContact = contactObj => ({
  type: 'EDIT_CONTACT',
  payload: contactObj,
});

export const deleteContact = contactObj => ({
  type: 'DELETE_CONTACT',
  payload: contactObj,
});
