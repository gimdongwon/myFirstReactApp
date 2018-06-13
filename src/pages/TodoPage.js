import React, { Component } from "react";
// import axios from "axios";

import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import todoAPI from "../components/todoAPI";
// import login from "../components/login";

// let count = 1;
// const todoAPI = axios.create({
//   baseURL: process.env.REACT_APP_API_URL
// });
// let count = 0; id를 위한 임시 변수였음

export default class TodoPage extends Component {
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
  // 함수 변수명 : 시작은 동사 너무 길 필요없다.
  updateTodoBody = async (id, body) => {
    // 할일 변경할때 사용
    this.setState({
      loading: true
    });
    await todoAPI.patch(`/todos/${id}`, {
      body
    });
    await this.fetchTodos();
  };

  completeTodo = async id => {
    // 할일 완료되었을 때 사용
    this.setState({
      loading: true
    });
    await todoAPI.patch(`/todos/${id}`, {
      complete: true
    });
    await this.fetchTodos();
  };

  deleteTodo = async id => {
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
            onTodoComplete={this.completeTodo} // 상태랑 상태를 바꾸는 함수
            onTodoDelete={this.deleteTodo}
            onTodoBodyUpdate={this.updateTodoBody}
          />
        )}
      </div>
    );
  }
}
