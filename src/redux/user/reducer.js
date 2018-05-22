import * as user from './type';
let defaultState = {
    userName: '',
};



export const userData = (state = defaultState, action) => {
    switch(action.type){
        case user.USERINFO_GET:
            return { ...state, userName:action.userName };
        default:
            return state;
    }
};