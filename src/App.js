import React from 'react';

import TodoPage from './pages/TodoPage';
import LoginPage from './pages/LoginPage';

import { UserProvider } from './contexts/UserContext';
import { HashRouter, Route, Redirect } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <UserProvider>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginPage} />
          <Route path="/todo" render={() => <TodoPage />} />
        </UserProvider>
      </HashRouter>
    );
  }
}

const Home = () =>
  localStorage.getItem('token') ? (
    <Redirect to="todo" />
  ) : (
    <Redirect to="login" />
  );

export default App;
