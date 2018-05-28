import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { Button } from 'antd-mobile';

import logo from '../../logo.svg';
import styles from './index.scss';
import Counter from '../Counter';

@CSSModules(styles)
class App extends Component {
  render() {
    return (
      <div styleName="app">
        <header styleName="header">
          <img src={logo} styleName="logo" alt="logo" />
          <h1 styleName="title">Welcome to React！</h1>
        </header>
        <Counter />
        <p styleName="intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button onClick={() => { this.props.history.push('/login'); }}>登录</Button>
      </div>
    );
  }
}

// export default hot(module)(CSSModules(App, styles));
export default App;
