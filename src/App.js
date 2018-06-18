import React from "react";

import TodoPage from "./pages/TodoPage";
import LoginPage from "./pages/LoginPage";

import { PageProvider, PageConsumer } from "./contexts/PageContext";
import { UserProvider } from "./contexts/UserContext";
import { TodoProvider } from "./contexts/TodoContext";
// export const PageContext = React.createContext({});
class App extends React.Component {
  render() {
    return (
      <PageProvider>
        <UserProvider>
          <TodoProvider>
            <PageConsumer>
              {value => (value.page === "login" ? <LoginPage /> : <TodoPage />)}
            </PageConsumer>
          </TodoProvider>
        </UserProvider>
      </PageProvider>
    );
  }
}
export default App;
