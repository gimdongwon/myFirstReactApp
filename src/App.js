import React, { Component } from "react";
import axios from "axios";

// import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

// let count = 1;
const todoAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});
// let count = 0; id를 위한 임시 변수였음

class App extends Component {
  state = {
    loading: false,
    todos: []
    // newTodoBody: ""
  };

  async componentDidMount() {
    await this.fetchTodos();
  }

  fetchTodos = async () => {
    this.setState({
      loading: true
    });
    const res = await todoAPI.get("/todos");
    this.setState({
      todos: res.data,
      loading: false
    });
  };

  // handleInputChange = e => {
  //   this.setState({
  //     newTodoBody: e.target.value
  //   });
  // };

  createTodo = async newTodoBody => {
    // 할일 추가 할 때 사용 비동기 함수는 promise가 반환된다.
    if (newTodoBody) {
      const newTodo = {
        body: newTodoBody,
        complete: false
      };
      this.setState({
        loading: true
      });
      await todoAPI.post("/todos", newTodo);
      await this.fetchTodos();
      // this.setState({
      //    todos: [...this.state.todos, newTodo],
      //   newTodoBody: ""
      // });
    }
  };

  handleTodoItemBodyUpdate = async (id, body) => {
    // 할일 변경할때 사용
    this.setState({
      loading: true
    });
    await todoAPI.patch(`/todos/${id}`, {
      body
    });
    await this.fetchTodos();
  };

  handleTodoItemComplete = async id => {
    // 할일 완료되었을 때 사용
    this.setState({
      loading: true
    });
    await todoAPI.patch(`/todos/${id}`, {
      complete: true
    });
    await this.fetchTodos();
  };

  handleTodoItemDelete = async id => {
    // 할일 삭제 할때 사용
    this.setState({
      loading: true
    });
    await todoAPI.delete(`/todos/${id}`);
    await this.fetchTodos();
  };

  render() {
    const { todos, loading } = this.state;
    return (
      <div>
        <h1>할 일 목록</h1>
        <TodoForm onCreate={this.createTodo} />
        {loading ? (
          <div>loading...</div>
        ) : (
          <TodoList
            todos={todos}
            handleTodoItemComplete={this.handleTodoItemComplete} // 상태랑 상태를 바꾸는 함수
            handleTodoItemDelete={this.handleTodoItemDelete}
            handleTodoItemBodyUpdate={this.handleTodoItemBodyUpdate}
          />
        )}
      </div>
    );
  }
}

export default App;
