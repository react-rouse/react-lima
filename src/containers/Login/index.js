import React, { Component } from 'react';
// import { is, fromJS } from 'immutable';
import { hot } from 'react-hot-loader';
import CSSModules from 'react-css-modules';
import { Toast } from 'antd-mobile';
import styles from  './index.scss';
import { BASE_API as API } from '@/utils/api';
import fetch from '@/utils/fetch';
import { connect } from 'react-redux';
import { getUserData } from '@/redux/user/action';

@hot(module)
@CSSModules(styles)
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { tel:'',pwd:'' };
  }
  telHandler=(e)=>{
    this.setState({
      tel:e.target.value
    });
  };
  pwdHandler=(e)=>{
    this.setState({
      pwd:e.target.value
    });
  };
  loginHandler=async ()=>{
    const self=this;
    if(!/^1[3456789]\d{9}$/.test(this.state.tel)){
      return Toast.info('手机号格式不正确');
    }
    if(!/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,20}$/.test(this.state.pwd)){
      return Toast.info('密码应为8~20位的数字、符号或字母中的2种组合');
    }
    let result = await fetch(API,'login',{ tel:this.state.tel,pwd:this.state.pwd });
    if(result.code===200){
      await self.props.getUserData();
      Toast.success(`${self.props.userData.userName},登录成功`);
     // self.props.history.push('/');
    }else{
      Toast.fail('登录失败');
    }
  };

  render() {
    return (
      <div styleName="login">
        <div styleName="header">
          <div styleName="header__back">
            <span className="iconfont icon-back"></span>
          </div>
          <div styleName="header__title">登陆</div>
          <div></div>
        </div>
        <div styleName="logo">
          <img styleName="logo__img" src={require('@/assets/images/login.png')} alt="登录图标">
          </img>
        </div>
        <div styleName="content">
          <div styleName="input-wrapper">
            <span className="iconfont icon-phone"></span>
            <input styleName="input-inner" type="tel" placeholder="请输入手机号" value={this.state.tel} onChange={this.telHandler} maxLength="11"></input>
          </div>
          <div styleName="input-wrapper">
            <span className="iconfont icon-password"></span>
            <input styleName="input-inner" type="password" placeholder="请输入密码" value={this.state.pwd} onChange={this.pwdHandler}></input>
          </div>
          <button styleName="login-btn" onClick={this.loginHandler}>登录</button>
          <div styleName="forget">
            <span styleName="forget__text">忘记密码？</span>
          </div>
        </div>
      </div>
    );
  }
};

export default connect(state => ({
  userData: state.userData,
}), {
  getUserData
})(Login);
