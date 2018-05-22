/**
 * Created by T00006331 on 2018/5/22.
 */
import * as user from './type';
import { BASE_MOCK_API as API } from '@/utils/api';
import fetch from '@/utils/fetch';

// 获取用户信息，保存至redux
export const getUserData = () => {
    // 返回函数，异步dispatch
    return async dispatch => {
        try{
            let result=await fetch(API,'dashboard',null,'GET');
            dispatch({
                type: user.USERINFO_GET,
                userName: result.data,
            });
        }catch(err){
            console.error(err);
        }
    };
};