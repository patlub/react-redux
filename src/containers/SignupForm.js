import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastname: '',
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  onInputChanged = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          placeholder="First Name"
          onChange={this.onInputChanged}
          required
        />
        <input
          type="text"
          name="lastName"
          value={this.state.lastname}
          placeholder="last Name"
          onChange={this.onInputChanged}
          required
        />
        <input
          type="email"
          name="email"
          value={this.state.email}
          placeholder="Email"
          onChange={this.onInputChanged}
          required
        />
        <input
          type="password"
          name="Password"
          value={this.state.password}
          placeholder="Password"
          onChange={this.onInputChanged}
          required
        />
      </form>
    );
  }
}

export default SignupForm;
