import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import Signup from './components/Signup';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store()}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users/signup" component={Signup} />
      </Switch>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
