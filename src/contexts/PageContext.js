import React from "react";

const { Provider, Consumer } = React.createContext();

class PageProvider extends React.Component {
  state = {
    page: "login"
  };
  toGoLogin = () => {
    this.setState({
      page: "todo"
    });
  };
  render() {
    const value = { page: this.state.page, toGoLogin: this.toGoLogin };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { PageProvider, Consumer as PageConsumer };
