import React from 'react';
import ReactDOM from 'react-dom';
import store from '@/redux/store';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import Route from './routes';


const render = Component => {
  ReactDOM.render(
    // 绑定redux、热加载
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  );
};

render(Route);

registerServiceWorker();
