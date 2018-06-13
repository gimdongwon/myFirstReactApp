import React from "react";

import TodoPage from "./pages/TodoPage";
import LoginPage from "./pages/loginPage";

import loginForm from "./components/LoginForm";

import { PageProvider, PageConsumer } from "./contexts/PageContext";
import { UserProvider } from "./contexts/UserContext";
// export const PageContext = React.createContext({});
class App extends React.Component {
  render() {
    return (
      <PageProvider>
        <PageConsumer>
          {value => (
            <UserProvider onLogin={value.goToTodoPage}>
              {value.page === "login" ? <LoginPage /> : <TodoPage />}
            </UserProvider>
          )}
        </PageConsumer>
      </PageProvider>
    );
  }
}

export default App;
