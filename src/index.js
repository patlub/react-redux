import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import Signup from './components/SIgnUp/index';
import Signin from './components/SignIn/index';
import AddTodo from './components/Todo/AddTodo';
import store from './store';
import axiosInstance from './utils/axiosInstance';
import registerServiceWorker from './registerServiceWorker';

(function setAuthorizationToken() {
  const token = localStorage.getItem('token');
  if (token) {
    axiosInstance.defaults.headers.common.Authorization = token;
  }
  else {
    delete axiosInstance.defaults.headers.common.Authorization;
  }
})();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store()}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/addtodo" component={AddTodo} />
      </Switch>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
