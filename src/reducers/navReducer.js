// @flow
const navReducer = (state, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default navReducer;
