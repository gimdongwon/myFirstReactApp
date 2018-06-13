import React from "react";

import TodoPage from "./pages/TodoPage";

export default class App extends React.Component {
  state = {
    page: "login"
  };
  login = () => {
    this.setState({
      page: "logined"
    });
  };
  render() {
    const { page } = this.state;
    return (
      <div>
        {page === "login" ? (
          <div>
            <h1>로그인 페이지 입니다</h1>
            id<input type="text" />
            password<input type="password" />
            <button onClick={this.login}>로그인</button>
          </div>
        ) : (
          <div>
            <h1>할일 추가 페이지입니다.</h1>
            <TodoPage />
          </div>
        )}
      </div>
    );
  }
}
