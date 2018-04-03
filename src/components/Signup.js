
import React from 'react';
import SignupForm from '../containers/SignupForm';

class Signup extends React.Component {
  render() {
    return (
      <SignupForm handleSubmit={this.handleSubmit} />
    );
  }
}

export default Signup;