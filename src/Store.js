import { createStore } from 'redux';
import masterReducer from './reducers/index';
import deals from './deals';

const stateInit = {
  deals,
  activeTab: 'pipelineTab',
  currentDealId: 0,
};

// TO-DO: Remove middleware after testing
/* eslint-disable no-underscore-dangle */
const store = createStore(
  masterReducer,
  stateInit,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default store;
