import React, { Component } from 'react';
import logo from '../../logo.svg';
// import CSSModules from 'react-css-modules';
import styles from  './index.scss';
import Counter from '../Counter';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1 className={styles.title}>Welcome to React！</h1>
        </header>
        <Counter></Counter>
        <p className={styles.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

// export default CSSModules(App, styles);
export default App;
