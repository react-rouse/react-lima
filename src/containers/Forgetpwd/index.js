import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { hot } from 'react-hot-loader';
// import { Button, InputItem } from 'antd-mobile';
import styles from './index.scss';

@hot(module)
@CSSModules(styles)
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { tel: '', pwd: '' };
  }
  telHandler=(e) => {
    this.setState({
      tel: e.target.value
    });
  };
  pwdHandler=(e) => {
    this.setState({
      pwd: e.target.value
    });
  };
  loginHandler=() => {
    console.log('登录', this.state.tel, ':::', this.state.pwd);
  };
  render() {
    return (
      <div styleName="login">
        <div styleName="header">
          <div styleName="header__back">
            <span className="iconfont icon-back">返回</span>
          </div>
          <div styleName="header__title">修改密码</div>
        </div>
        <div styleName="content">
          <div styleName="input-wrapper">
            <span styleName="text">手机号码</span>
            <input styleName="input-inner" type="tel" placeholder="15227760778" value={this.state.tel} onChange={this.telHandler} maxLength="11" />
          </div>
          <div styleName="input-wrapper">
            <span styleName="text">验证码</span>
            <input styleName="input-inner" type="tel" placeholder="请输入验证码" value={this.state.tel} onChange={this.telHandler} maxLength="11" />
          </div>
          <div styleName="input-wrapper">
            <span styleName="text">新密码</span>
            <input styleName="input-inner" type="tel" placeholder="请输入新密码" value={this.state.tel} onChange={this.telHandler} maxLength="11" />
          </div>
        </div>
        <div styleName="btn">
          <button styleName="login-btn" onClick={this.loginHandler}>登录</button>
        </div>
      </div>
    );
  }
}
