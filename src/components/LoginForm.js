import React from 'react';

export default class LoginForm extends React.Component {
  // state = {
  //   username: "",
  //   password: ""
  // };

  // handleUsernameChange = e => {
  //   this.setState({
  //     username: e.target.value
  //   });
  // };

  // handlePasswordChange = e => {
  //   this.setState({
  //     password: e.target.value
  //   });
  // };
  // 제어되지 않는 컴포넌트 이용을 위한 주석

  // ref

  handleLoginClick = async e => {
    // 로그인 요청
    const { onLogin } = this.props;
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    onLogin(username, password);
  };

  render() {
    // const { username, password } = this.state;
    return (
      <form onSubmit={this.handleLoginClick}>
        <div>
          <label>
            id<input type="text" name="username" />
          </label>
          <label>
            password<input type="password" name="password" />
          </label>
          <button>로그인</button>
        </div>
      </form>
    );
  }
}
