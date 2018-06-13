import React, { Component } from "react";

import LoginForm from "../components/LoginForm";
import { PageContext } from "../App";
import { UserConsumer } from "../contexts/UserContext";

export default class LoginPage extends Component {
  render() {
    return;
    <UserConsumer>
      {value => <LoginForm onLogin={value.login} />};
    </UserConsumer>;
  }
}
