import React, { Component } from "react";

let count = 0;
const todos = [
  {
    id: count++,
    body: "React Study",
    complete: true
  },
  {
    id: count++,
    body: "Redux Study",
    complete: false
  }
];

class App extends Component {
  state = {
    todos: [
      {
        id: count++,
        body: "React Study",
        complete: true
      },
      {
        id: count++,
        body: "Redux Study",
        complete: false
      }
    ],
    newTodoBody: ""
  };

  handleInputChange = e => {
    this.setState({
      newTodoBody: e.target.value
    });
  };

  handleButtonClick = e => {
    if (this.state.newTodoBody) {
      const newTodo = {
        body: this.state.newTodoBody,
        complete: false,
        id: count++
      };
      this.setState({
        todos: [...this.state.todos, newTodo],
        newTodoBody: ""
      });
    }
  };

  render() {
    const { todos, newTodoBody } = this.state;
    return (
      <div>
        <h1>ToDoList</h1>
        <label>
          새할일
          <input
            type="text"
            value={newTodoBody}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleButtonClick}>add</button>
        </label>
        <ul>
          {todos.map(todo => {
            return (
              <li className={todo.complete ? "complete" : ""} key={todo.id}>
                {todo.body}
                <button
                  onClick={e => {
                    this.setState({
                      todos: todos.map(t => {
                        const newTodo = {
                          ...t
                        };
                        if (t.id === todo.id) {
                          newTodo.complete = true;
                        }
                        return newTodo;
                      })
                    });
                    {/* todo.id; */}
                  }}
                >
                  finish!
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;

// classNames npm start
