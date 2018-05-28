import React, { Component } from 'react';
// import { is, fromJS } from 'immutable';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import { hot } from 'react-hot-loader';
import { getUserData, login, emptyMsg } from '@/redux/user';
import loginPng from '@/assets/images/login.png';
import ComHeader from '@/components/Header';
import styles from './index.scss';

@hot(module)
@CSSModules(styles)
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { tel: '', pwd: '' };
  }

  telHandler = (e) => {
    this.setState({
      tel: e.target.value
    });
  };

  pwdHandler = (e) => {
    this.setState({
      pwd: e.target.value
    });
  };

  loginHandler = async () => {
    this.props.login(this.state);
  };

  render() {
    const { msg } = this.props.user;

    return (
      <div styleName="login">
        <ComHeader history={this.props.history}>登录</ComHeader>
        <div styleName="logo">
          <img styleName="logo__img" src={loginPng} alt="登录图标" />
        </div>
        <div styleName="content">
          <div styleName="input-wrapper">
            <span className="iconfont icon-phone" />
            <input styleName="input-inner" type="tel" placeholder="请输入手机号" value={this.state.tel} onChange={this.telHandler} maxLength="11" />
          </div>
          <div styleName="input-wrapper">
            <span className="iconfont icon-password" />
            <input styleName="input-inner" type="password" placeholder="请输入密码" value={this.state.pwd} onChange={this.pwdHandler} />
          </div>
          <div styleName="message">{ msg }</div>
          <button styleName="login-btn" onClick={this.loginHandler}>登录</button>
          <div styleName="forget">
            <span styleName="forget__text">忘记密码？</span>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  user: state.user,
}), {
  getUserData,
  login,
  emptyMsg
})(Login);
