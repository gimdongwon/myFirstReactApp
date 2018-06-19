import React from "react";

import { UserConsumer } from "../contexts/UserContext";
import { PageConsumer } from "../contexts/PageContext";

export default class LogoutButtonContainer extends React.Component {
  render() {
    return (
      <UserConsumer>
        {({ logout }) => (
          <PageConsumer>
            {({ goToLoginPage }) => (
              <button
                onClick={e => {
                  logout();
                  goToLoginPage();
                }}
              >
                logout
              </button>
            )}
          </PageConsumer>
        )}
      </UserConsumer>
    );
  }
}
