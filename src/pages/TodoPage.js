import React, { Component } from "react";
// import axios from "axios";

import TodoContainer from "../containers/TodoContainer";
import LogoutButtonContainer from "../containers/LogoutButtonContainer";
import TodoProvider from "../contexts/TodoContext";
import withAuth from "../hocs/withAuth";
// let count = 1;
// const todoAPI = axios.create({
//   baseURL: process.env.REACT_APP_API_URL
// });
// let count = 0; id를 위한 임시 변수였음
class TodoPage extends Component {
  static defaultProps = {
    title: "My Title"
  };
  render() {
    // const { todos, loading } = this.state;
    return (
      <TodoProvider>
        <h1>{this.props.title}</h1>
        <TodoContainer />
        <LogoutButtonContainer />
      </TodoProvider>
    );
  }
}

TodoPage.defaultProps = {
  title: "My Title"
};

export default withAuth("/login")(TodoPage);
