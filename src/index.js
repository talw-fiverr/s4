import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


import App                  from './components/App';
import AboutPage            from './pages/AboutPage';
import CategoryPage         from './pages/CategoryPage';
import ContactUsPage        from './pages/ContactUsPage';
import CollaborationsPage   from './pages/CollaborationsPage';
import ManageGroupsPage     from './pages/ManageGroupsPage';
import PrivacyPage          from './pages/PrivacyPage';
import QaPage               from './pages/QaPage';
import GroupPage            from './pages/GroupPage';
import LoginPage            from './pages/LoginPage';
import CreateNewGroup       from './pages/CreateNewGroup';

const createStoreWithMiddleware = applyMiddleware()(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <Header />
//     <App />
//   </Provider>
//   , document.querySelector('.container'));

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/"                     component={App}></Route>
    <Route path="/About"                component={AboutPage}></Route>
    <Route path="/Collaborations"       component={CollaborationsPage}></Route>
    <Route path="/Category/*"           component={CategoryPage}></Route>
    <Route path="/ContactUs"            component={ContactUsPage}></Route>
    <Route path="/ManageGroups"         component={ManageGroupsPage}></Route>
    <Route path="/Privacy"              component={PrivacyPage}></Route>
    <Route path="/Qa"                   component={QaPage}></Route>
    <Route path="/group/*"              component={GroupPage}></Route>
    <Route path="/Login"                component={LoginPage}></Route>
    <Route path="/create-new-group"     component={CreateNewGroup}></Route>
  </Router>
), document.querySelector('.app-container'))

  //ReactDOM.render(<App />, document.querySelector('.app-container'));
