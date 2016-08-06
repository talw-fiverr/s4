import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// require('style/style.scss');

import App from './components/App';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <Header />
//     <App />
//   </Provider>
//   , document.querySelector('.container'));

  ReactDOM.render(<App />, document.querySelector('.app-container'));
