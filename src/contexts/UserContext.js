import React from "react";
import todoAPI from "../components/todoAPI";

const { Provider, Consumer } = React.createContext();

export default class UserProvider extends React.Component {
  handleLoginClick = async (username, password) => {
    // 로그인 요청
    const res = await todoAPI.post("/users/login", {
      username: username,
      password: password
    });
    //localStorage에 토큰 저장
    localStorage.setItem("token", res.data.token);
    // page 전환
    this.props.onLogin();
  };
  render() {
    const value = {
      login: this.login
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { UserProvider, Consumer as UserConsumer };
