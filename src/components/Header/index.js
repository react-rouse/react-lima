import React, { Component } from 'react';
// import { is, fromJS } from 'immutable';
import { hot } from 'react-hot-loader';
import CSSModules from 'react-css-modules';
import styles from './index.scss';


@hot(module)
@CSSModules(styles)
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  backHandler=() => {
    this.props.history.go(-1);
  };


  render() {
    return (
      <div styleName="header">
        <div styleName="header__back">
          <span className="iconfont icon-back" onClick={this.backHandler} />
        </div>
        <div styleName="header__title">{this.props.children}</div>
      </div>
    );
  }
}

export default Header;
