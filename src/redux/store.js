/**
 * Created by T00006331 on 2018/5/22.
 */
import { createStore, combineReducers, applyMiddleware ,compose } from 'redux';
import * as user from './user/reducer';
import { counter } from './counter.redux';

import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
    combineReducers({ ...user,counter }),
    composeEnhancers(applyMiddleware(thunk))
);

export default store;