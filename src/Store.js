import { createStore, applyMiddleware } from 'redux';
import masterReducer from './reducers/index';
import deals from './deals';

// Define basic logging middleware for our actions
// TO-DO: Remove middleware after testing
const logActions = () => next => (action) => {
  console.log('Action Dispatched: ', action);
  next(action);
};

const stateInit = {
  deals,
  activeTab: 'pipelineTab',
  currentDealId: 0,
};

// TO-DO: Remove middleware after testing
const store = createStore(
  masterReducer,
  stateInit,
  applyMiddleware(logActions),
);

export default store;
