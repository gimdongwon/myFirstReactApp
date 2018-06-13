import React from "react";

import todoAPI from "./todoAPI";
import loginPage from "../pages/loginPage";
import { PageContext } from "../App";

export default class loginForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleUsernameChange = e => {
    this.setState({
      username: e.target.value
    });
  };

  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  };
  handleLoginClick = onLogin => async e => {
    // 로그인 요청
    const res = await todoAPI.post("/users/login", {
      username: this.state.username,
      password: this.state.password
    });
    //localStorage에 토큰 저장
    localStorage.setItem("token", res.data.token);
    // page 전환
    onLogin();
  };

  render() {
    // const { onLogin } = this.props;
    const { username, password } = this.state;
    return (
      <PageContext.Consumer>
        {value => (
          <div>
            <label>
              id<input
                type="text"
                value={username}
                onChange={this.handleUsernameChange}
              />
            </label>
            <label>
              password<input
                type="password"
                value={password}
                onChange={this.handlePasswordChange}
              />
            </label>
            <button onClick={this.handleLoginClick(value.goToTodoPage)}>
              로그인
            </button>
          </div>
        )}
      </PageContext.Consumer>
    );
  }
}
