import React, { Component } from "react";
// import axios from "axios";

import TodoContainer from "../containers/TodoContainer";
// import login from "../components/login";

// let count = 1;
// const todoAPI = axios.create({
//   baseURL: process.env.REACT_APP_API_URL
// });
// let count = 0; id를 위한 임시 변수였음
class TodoPage extends Component {
  render() {
    // const { todos, loading } = this.state;
    return <TodoContainer />;
  }
}

export default TodoPage;
