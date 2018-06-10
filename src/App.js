import React, { Component } from "react";

const todos = [
  {
    id: 1,
    body: "React Study",
    complete: true
  },
  {
    id: 2,
    body: "Redux Study",
    complete: false
  }
];

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        body: "React Study",
        complete: true
      },
      {
        id: 2,
        body: "Redux Study",
        complete: false
      }
    ]
  };
  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>ToDoList</h1>
        <ul>
          {todos.map(todo => {
            return (
              <li className={todo.complete ? "complete" : ""} key={todo.id}>
                {todo.body}
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
