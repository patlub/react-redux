import React from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
  }

  onInputChanged = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.signupAction()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.onInputChanged}
          hintText="First name"
          fullWidth
          className="text-field"
        />

        <TextField
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.onInputChanged}
          hintText="Last name"
          fullWidth
          className="text-field"
        />

        <TextField
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.onInputChanged}
          hintText="Email"
          fullWidth
          className="text-field"
        />

        <TextField
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.onInputChanged}
          hintText="Password"
          fullWidth
          className="text-field"
        />
        <RaisedButton
          type="submit"
          label="Sign up"
          primary
          fullWidth
        />
        </form>
    );
  }
}

export default SignupForm;
