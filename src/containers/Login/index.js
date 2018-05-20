import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import CSSModules from 'react-css-modules';
//import { Button, InputItem } from 'antd-mobile';
import styles from  './index.scss';

@hot(module)
@CSSModules(styles)
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
            <input styleName="input-inner" type="number" placeholder="请输入手机号"></input>
          </div>
          <div styleName="input-wrapper">
            <span className="iconfont icon-password"></span>
            <input styleName="input-inner" type="password" placeholder="请输入密码"></input>
          </div>
          <button styleName="login-btn">登录</button>
          <div styleName="forget">
            <span styleName="forget__text">忘记密码？</span>
          </div>
        </div>
      </div>
    );
  }
};
