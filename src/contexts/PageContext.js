import React from "react";

const { Consumer, Provider } = React.createContext();

class PageProvider extends React.Component {
  state = {
    page: "login"
  };
  goToTodoPage = () => {
    this.setState({
      page: "logined"
    });
  };
  render() {
    const value = {
      page: this.state.page,
      goToTodoPage: this.goToTodoPage
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { PageProvider, Consumer as PageConsumer };
