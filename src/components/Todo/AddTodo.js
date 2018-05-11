
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTodoForm from '../../containers/AddTodo';
import { addTodoAction } from '../../actions/todo';
import ApplicationBar from '../ApplicationBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const mapStateToProps = state => ({ state });

class AddTodo extends React.Component {

  render() {
    const { addTodoAction } = this.props;
    return (
      <div className="container-fluid">
        <MuiThemeProvider>
          <div>
            <div className="row">
              <ApplicationBar />
            </div>
            <div className="row vertical">
              <div className="col-3">
                <div className="col-12 sign-up-title">Add Todo</div>
                <AddTodoForm addTodoAction={addTodoAction} />
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      </div>

    );
  }
}

AddTodo.propTypes = {
  addTodoAction: PropTypes.func,
};

export default connect(mapStateToProps, { addTodoAction })(AddTodo);
