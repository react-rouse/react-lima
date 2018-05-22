import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AppContainer } from 'react-hot-loader';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import Route from './routes';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware()
));
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
