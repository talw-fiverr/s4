import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers             from './reducers/index';

import App                  from './components/App';
import AboutPage            from './pages/AboutPage';
import CategoryPage         from './pages/CategoryPage';
import ContactUsPage        from './pages/ContactUsPage';
import CollaborationsPage   from './pages/CollaborationsPage';
import ManageGroupsPage     from './pages/ManageGroupsPage';
import PrivacyPage          from './pages/PrivacyPage';
import QaPage               from './pages/QaPage';
import GroupPage            from './pages/GroupPage';
import RegisterPage         from './pages/RegisterPage';
import CreateNewGroup       from './pages/CreateNewGroup';

const createStoreWithMiddleware = applyMiddleware()(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <Header />
//     <App />
//   </Provider>
//   , document.querySelector('.container'));

ReactDOM.render((
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/"                     component={App}></Route>
      <Route path="/about"                component={AboutPage}></Route>
      <Route path="/collaborations"       component={CollaborationsPage}></Route>
      <Route path="/category/*"           component={CategoryPage}></Route>
      <Route path="/contact-us"           component={ContactUsPage}></Route>
      <Route path="/manage-groups"        component={ManageGroupsPage}></Route>
      <Route path="/privacy"              component={PrivacyPage}></Route>
      <Route path="/qa"                   component={QaPage}></Route>
      <Route path="/group/*"              component={GroupPage}></Route>
      <Route path="/register"             component={RegisterPage}></Route>
      <Route path="/create-new-group"     component={CreateNewGroup}></Route>
    </Router>
  </Provider>
), document.querySelector('.app-container'))

  //ReactDOM.render(<App />, document.querySelector('.app-container'));
