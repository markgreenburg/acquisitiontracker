// We may be able to get away with just a single reducer if data structure is simple
// import { combineReducers } from 'redux';

const masterReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_DEAL': {
      const newState = {
        ...state,
        deals: [...state.deals, action.payload],
      };
      return newState;
    }
    case 'EDIT_DEAL': {
      const newState = {
        ...state,
        deals: state.deals.map(current => (
          current.id === action.payload.id
            ? action.payload
            : current)),
      };
      return newState;
    }
    case 'DELETE_DEAL': {
      const newState = {
        ...state,
        deals: state.filter(current => (current.id !== action.payload.id)),
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
