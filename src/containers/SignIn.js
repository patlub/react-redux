import React from 'react';
import { Redirect } from 'react-router';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      authenticated: false
    };
  }

  onInputChanged = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({errors: false})
    this.props.signinAction(this.state).then(
      () => {
       this.setState({ authenticated: true })
      }
    ).catch(
      error => {
        console.log(error)
        this.setState({ errors: true })
      }
    )
  }

  render() {
    if(this.state.authenticated) return <Redirect to='/'/>

    return (
      <form onSubmit={this.handleSubmit}>

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
          label="Sign in"
          primary
          fullWidth
        />
        </form>
    );
  }
}

export default SigninForm;
