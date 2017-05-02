// We may be able to get away with just a single reducer if data structure is simple
// import { combineReducers } from 'redux';
import emptyDeal from '../emptyDeal';
/**
 * For now, the only reducer used by this app. Takes actions from the app and
 * updates the Redux store's state accordingly
 * TO-DO: split up reducer and pull in combineReducers
 * @param {object} state current state of the Redux store
 * @param {object} action action object, consists of action type and payload
 */
const masterReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_DEAL':
      return ({
        ...state,
        deals: [
          ...state.deals,
          { ...emptyDeal, ...action.payload, id: state.deals.length }],
      });
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
    case 'DELETE_DEAL':
      return ({
        ...state,
        deals: state.deals.filter(deal => (deal.id !== action.payload.id)),
      });
    case 'CHANGE_TAB':
      return ({
        ...state,
        activeTab: action.payload,
      });
    case 'CHANGE_DEAL':
      return ({
        ...state,
        currentDealId: action.payload,
      });
    // TO-DO: Compose reducers. This is a disaster...
    case 'ADD_CONTACT': {
      const dealsToLeave = [
        ...state.deals.filter(deal => (deal.id !== action.payload.id)),
      ];
      const dealToUpdate = {
        ...state.deals.find(deal => deal.id === action.payload.id),
      };
      return ({
        ...state,
        deals: [
          ...dealsToLeave,
          {
            ...dealToUpdate,
            contacts: [
              ...dealToUpdate.contacts,
              action.payload.contact,
            ],
          },
        ],
      });
    }
    default:
      return state;
  }
};

export default masterReducer;
