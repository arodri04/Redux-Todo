import React from "react";
import { connect } from "react-redux";
import { addtodo } from "../actions/index";
import { completed } from "../actions/index";
import "../index.css";

class Todos extends React.Component {
  state = {
    newtodo: ""
  };

  handleChanges = e => {
    this.setState({
      newtodo: e.target.value
    });
  };

  addtodo = e => {
    e.preventDefault();
    this.props.addtodo(this.state.newtodo);
    this.setState({ newtodo: "" });
  };
  done = index => {
    this.props.completed(index);
    console.log(this.props.todos);
  };

  render() {
    return (
      <div className="body">
        <h2>{this.props.normalProp}</h2>
        <div>
          {this.props.todos.map((todo, index) => (
            <h3
              className={this.props.todos[index].done == false ? " " : "line"}
              onClick={() => {
                this.done(todo.id);
              }}
            >
              {todo.task}
            </h3>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newtodo}
          placeholder="Add a task"
          onChange={this.handleChanges}
        />
        <button onClick={this.addtodo}>Add task</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addtodo, completed }
)(Todos);
