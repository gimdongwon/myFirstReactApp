import React from "react";

import { UserConsumer } from "../contexts/UserContext";
import { Redirect } from "react-router-dom";
export default class LogoutButtonContainer extends React.Component {
  state = {
    success: false
  };
  render() {
    if (this.state.success) {
      return <Redirect to="/login" />;
    } else {
      return (
        <UserConsumer>
          {({ logout }) => (
            <button
              onClick={e => {
                logout();
                this.setState({ success: true });
              }}
            >
              logout
            </button>
          )}
        </UserConsumer>
      );
    }
  }
}
