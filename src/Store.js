import { createStore } from 'redux';
import masterReducer from './reducers/index';
import deals from './deals';

const store = createStore(masterReducer, deals);

export default store;
