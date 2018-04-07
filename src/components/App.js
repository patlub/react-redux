import React, { Component } from 'react';
import '../styles/App.css';
import ApplicationBar from './ApplicationBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <ApplicationBar />
        </MuiThemeProvider>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
