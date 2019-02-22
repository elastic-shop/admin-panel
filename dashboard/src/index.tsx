import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './reducers';
import './styles/index.scss';

declare global {
  const NODE_ENV: string;
}

const root = document.getElementById('root');

if (root) {

  const renderApp = () => ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    ,
    root
  );

  renderApp();
  if (NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./components/App', renderApp);
  }

} else {
  throw new Error(`Can't find root element`);
}