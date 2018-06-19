import React from "react";
import todoAPI from "../components/todoAPI";

const { Provider, Consumer } = React.createContext();

class UserProvider extends React.Component {
  login = async (username, password) => {
    // 로그인 요청
    try {
      const res = await todoAPI.post("/users/login", {
        username: username,
        password: password
      });
      //localStorage에 토큰 저장
      localStorage.setItem("token", res.data.token);
      // page 전환
      // this.props.onLogin();
    } catch (e) {
      if (e.response) {
        if (e.response && e.response.status === 400) {
          alert("id혹은 password가 일치 하지 않습니다");
        }
      }
    }
  };

  logout = () => {
    localStorage.removeItem("token");
  };
  render() {
    const value = {
      login: this.login,
      logout: this.logout
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { UserProvider, Consumer as UserConsumer };
