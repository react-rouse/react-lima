import React, { Component } from 'react';
// import { is, fromJS } from 'immutable';
import CSSModules from 'react-css-modules';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { getUserData } from '@/redux/user';
import ComHeader from '@/components/Header';
import styles from './index.scss';

@hot(module)
@CSSModules(styles)
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div>
        <ComHeader history={this.props.history}>首页</ComHeader>
      </div>
    );
  }
}

export default connect(state => ({
  user: state.user,
}), {
  getUserData
})(Index);
