/**
 * Created by T00006331 on 2018/5/18.
 */
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '@/utils/asyncComponent';
import App from '@/containers/App';

const Login = asyncComponent(() => import('@/containers/Login'));

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/login" component={Login} />
      <Redirect to="/" />
    </Switch>
  </Router>
);
