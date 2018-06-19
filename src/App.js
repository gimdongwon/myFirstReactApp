import React from "react";

import TodoPage from "./pages/TodoPage";
import LoginPage from "./pages/LoginPage";

import { UserProvider } from "./contexts/UserContext";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <UserProvider>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginPage} />
          <Route path="/todo" component={TodoPage} />
        </UserProvider>
      </BrowserRouter>
    );
  }
}

const Home = () =>
  localStorage.getItem("token") ? (
    <Redirect to="todo" />
  ) : (
    <Redirect to="login" />
  );

export default App;
