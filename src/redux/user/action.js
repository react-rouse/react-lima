/**
 * Created by T00006331 on 2018/5/22.
 */
import { BASE_MOCK_API as API } from '@/utils/api';
import fetch from '@/utils/fetch';
import * as type from './type';

// 获取用户信息，保存至redux
const getUserData = () =>
  // 返回函数，异步dispatch
  async dispatch => {
    try {
      const result = await fetch(API, 'dashboard', null, 'GET');
      dispatch({
        type: type.USERINFO_GET,
        userName: result.data,
      });
    } catch (err) {
      console.error(err);
    }
  };

export default getUserData;

