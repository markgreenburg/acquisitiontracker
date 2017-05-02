import emptyDeal from '../emptyDeal';

/**
 * Reducer for 'deal' actions in the app. Updates Redux store's state based
 * on user input and subsequent dispatched actions.
 * @param {object} state Redux state object with current store data
 * @param {object} action Redux action object with type & payload properties
 */
const dealReducer = (state, action) => {
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
      return ({
        ...state,
        deals: state.deals.map(current => (
          current.id !== action.payload.id
            ? current
            : Object.assign(current, updateSnippet)
        )),
      });
    }
    case 'DELETE_DEAL':
      return ({
        ...state,
        deals: state.deals.filter(deal => (deal.id !== action.payload.id)),
      });
    default:
      return state;
  }
};

export default dealReducer;
