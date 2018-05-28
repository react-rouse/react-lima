import { combineReducers } from 'redux';

import { user } from './redux/user';
import { counter } from './redux/counter';

export default combineReducers({ user, counter });
