// We may be able to get away with just a single reducer if data structure is simple
// import { combineReducers } from 'redux';

const masterReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_DEAL': {
      const newDealId = { id: state.deals.length };
      const newDeal = Object.assign(action.payload, newDealId);
      const newState = {
        ...state,
        deals: [...state.deals, newDeal],
      };
      return newState;
    }
    case 'EDIT_DEAL': {
      const updateSnippet = {};
      updateSnippet[action.payload.updateKey] = action.payload.updateValue;
      const newState = {
        ...state,
        deals: state.deals.map(current => (
          current.id !== action.payload.id
            ? current
            : Object.assign(current, updateSnippet)
        )),
      };
      return newState;
    }
    case 'DELETE_DEAL': {
      const newState = {
        ...state,
        deals: state.deals.filter(current => (current.id !== action.payload.id)),
      };
      return newState;
    }
    case 'CHANGE_TAB': {
      const newState = {
        ...state,
        activeTab: action.payload,
      };
      return newState;
    }
    default:
      return state;
  }
};

export default masterReducer;
