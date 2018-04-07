
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class ApplicationBar extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </MuiThemeProvider>
    );
  }
}

export default ApplicationBar;
