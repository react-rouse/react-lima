import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '@/utils/asyncComponent';
import App from '@/containers/App';

const Login = asyncComponent(() => import('@/containers/Login'));
const Index = asyncComponent(() => import('@/containers/Index'));
const Forgetpwd = asyncComponent(() => import('@/containers/Forgetpwd'));

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
/* eslint-disable */
export default class RouteConfig extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/login" component={Login} />
          <Route path="/index" component={Index} />
          <Route path="/forgetpwd" component={Forgetpwd} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

