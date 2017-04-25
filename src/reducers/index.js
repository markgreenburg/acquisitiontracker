// We may be able to get away with just a single reducer if data structure is simple
// import { combineReducers } from 'redux';

const masterReducer = (state, action) => {
  const deal = action.payload;
  let deals = [];
  switch (action.type) {
    case 'ADD_DEAL':
      return [...state, action.payload];
    case 'EDIT_DEAL':
      deals = state.map(current => (current.id === deal.id ? deal : current));
      return deals;
    case 'DELETE_DEAL':
      deals = state.filter(current => (current.id !== deal.id));
      return deals;
    default:
      return state;
  }
};

export default masterReducer;
