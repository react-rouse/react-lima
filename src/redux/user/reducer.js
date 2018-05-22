import * as type from './type';

const defaultState = {
  userName: '',
};

export const userData = (state = defaultState, action) => {
  switch (action.type) {
    case type.USERINFO_GET:
      return { ...state, userName: action.userName };
    default:
      return state;
  }
};

export const test = '1';

