import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import CSSModules from 'react-css-modules';
//import { Button, InputItem } from 'antd-mobile';
import styles from  './index.scss';

@hot(module)
@CSSModules(styles)
export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div styleName="login">
        <div styleName="header">
          <div styleName="header__back">
            <span class="iconfont icon-back"></span>
          </div>
          <div styleName="header__title">登陆</div>
          <div></div>
        </div>
      </div>
    );
  }
};
