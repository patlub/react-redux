import React from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class AddTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      userId: 1,
    };
  }

  onInputChanged = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({errors: false})
    this.props.addTodoAction(this.state).then(
      (response) => {
        console.log(response)
      }
    ).catch(
      error => {
        console.log(error)
        this.setState({ errors: true })
      }
    )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <TextField
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.onInputChanged}
          hintText="title"
          fullWidth
          className="text-field"
        />

        <RaisedButton
          type="submit"
          label="Add Todo"
          primary
          fullWidth
        />
        </form>
    );
  }
}

export default AddTodoForm;
