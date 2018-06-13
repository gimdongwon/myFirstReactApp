import React from "react";

export default class LoginForm extends React.Component {
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
  handleLoginClick = async e => {
    // 로그인 요청
    const { onLogin } = this.props;
    onLogin(this.state.username, this.state.password);
  };

  render() {
    const { username, password } = this.state;
    return (
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
        <button onClick={this.handleLoginClick}>로그인</button>
      </div>
    );
    // {
    /* <PageContext.Consumer>
        {value => ( */
    // }
  }
}
