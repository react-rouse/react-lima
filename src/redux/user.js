// 获取用户信息
/**
 * Created by T00006331 on 2018/5/22.
 */
import fetch from '@/utils/fetch';

const GET_USER_DATA = 'GET_USER_DATA';
const USER_LOGIN = 'USER_LOGIN';
const ERROR_MSG = 'ERROR_MSG';
const EMPTY_MSG = 'EMPTY_MSG';

const defaultState = {
  userName: '',
  msg: ''
};

export function emptyMsg() {
  return { type: EMPTY_MSG, msg: {} };
}

export const user = (state = defaultState, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return { ...state, userName: action.userName };
    case USER_LOGIN:
      return { ...state, msg: action.msg };
    case ERROR_MSG:
    case EMPTY_MSG:
      return { ...state, msg: action.msg };
    default:
      return state;
  }
};

// 获取用户信息，保存至redux
export function getUserData() {
  // 返回函数，异步dispatch
  return async dispatch => {
    try {
      const result = await fetch('dashboard', null, 'GET');
      dispatch({
        type: GET_USER_DATA,
        userName: result.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
}

function errorMsg(msg) {
  return { type: ERROR_MSG, msg };
}

export function login({ tel, pwd }) {
  if (!/^1[3456789]\d{9}$/.test(tel)) {
    return errorMsg('手机号格式不正确');
  }
  if (!/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,20}$/.test(pwd)) {
    return errorMsg('密码应为8~20位的数字、符号或字母中的2种组合');
  }

  return async dispatch => {
    try {
      const result = await fetch('login', { tel, pwd });
      if (result.code === 200) {
        dispatch({
          type: USER_LOGIN,
          msg: ''
        });
      } else {
        dispatch(errorMsg('用户名或密码错误'));
      }
    } catch (err) {
      console.log(err);
    }
  };
}
