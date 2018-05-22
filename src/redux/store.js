/**
 * Created by T00006331 on 2018/5/22.
 */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { userData } from './user/reducer';
import { counter } from './counter.redux';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({ userData, counter }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
