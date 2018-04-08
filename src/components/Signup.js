
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignupForm from '../containers/SignupForm';
import { signupAction } from '../actions/auth';
import ApplicationBar from './ApplicationBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const mapStateToProps = state => ({ state });

class Signup extends React.Component {

  render() {
    const { signupAction } = this.props;
    return (
      <div className="container-fluid">
        <MuiThemeProvider>
          <div>
          <div className="row">
            <ApplicationBar />
          </div>
          <div className="row vertical">
            <div className="col-3">
              <div className="col-12 sign-up-title">Sign Up</div>
              <SignupForm signupAction={signupAction} />
            </div>
          </div>
          </div>
        </MuiThemeProvider>
      </div>

    );
  }
}

Signup.propTypes = {
  signupAction: PropTypes.func,
};

export default connect(mapStateToProps, { signupAction })(Signup);
