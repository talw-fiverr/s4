import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


import App from './components/App';
import CategoryPage from './pages/CategoryPage';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <Header />
//     <App />
//   </Provider>
//   , document.querySelector('.container'));

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}></Route>
    <Route path="CategoryPage/*" component={CategoryPage}></Route>
  </Router>
), document.querySelector('.app-container'))

  //ReactDOM.render(<App />, document.querySelector('.app-container'));
