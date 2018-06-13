import React from "react";

import TodoPage from "./pages/TodoPage";
import LoginPage from "./pages/loginPage";

import loginForm from "./components/LoginForm";

export const PageContext = React.createContext({});
export class App extends React.Component {
  state = {
    page: "login"
  };
  goToTodoPage = () => {
    this.setState({
      page: "logined"
    });
  };
  render() {
    const { page } = this.state;
    const value = {
      goToTodoPage: this.goToTodoPage
    };
    return (
      <PageContext.Provider value={value}>
        <div>
          {page === "login" ? (
            <div>
              <h1>로그인 페이지 입니다</h1>
              <LoginPage />
            </div>
          ) : (
            <div>
              <h1>할일 추가 페이지입니다.</h1>
              <TodoPage />
            </div>
          )}
        </div>
      </PageContext.Provider>
    );
  }
}
