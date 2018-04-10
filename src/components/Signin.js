
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SigninForm from '../containers/SigninForm';
import { signinAction } from '../actions/auth';
import ApplicationBar from './ApplicationBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const mapStateToProps = state => ({ state });

class Signin extends React.Component {

  render() {
    const { signinAction } = this.props;
    return (
      <div className="container-fluid">
        <MuiThemeProvider>
          <div>
            <div className="row">
              <ApplicationBar />
            </div>
            <div className="row vertical">
              <div className="col-3">
                <div className="col-12 sign-up-title">Sign In</div>
                <SigninForm signinAction={signinAction} />
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      </div>

    );
  }
}

Signin.propTypes = {
  signinAction: PropTypes.func,
};

export default connect(mapStateToProps, { signinAction })(Signin);
