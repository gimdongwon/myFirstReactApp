import React from 'react';
import todoAPI from '../components/todoAPI';

const { Provider, Consumer } = React.createContext();

export default class TodoProvider extends React.Component {
  state = {
    loading: false,
    todos: [],
    // newTodoBody: ""
  };

  async componentDidMount() {
    await this.fetchTodos();
  }

  fetchTodos = async () => {
    this.setState({
      loading: true,
    });
    const res = await todoAPI.get('/todos');
    this.setState({
      todos: res.data,
      loading: false,
    });
  };

  // handleInputChange = e => {
  //   this.setState({
  //     newTodoBody: e.target.value
  //   });
  // };

  createTodo = async newTodoBody => {
    // 할일 추가 할 때 사용 비동기 함수는 promise가 반환된다.
    if (newTodoBody) {
      const newTodo = {
        body: newTodoBody,
        complete: false,
      };
      this.setState({
        loading: true,
      });
      await todoAPI.post('/todos', newTodo);
      await this.fetchTodos();
      // this.setState({
      //    todos: [...this.state.todos, newTodo],
      //   newTodoBody: ""
      // });
    }
  };
  // 함수 변수명 : 시작은 동사 너무 길 필요없다.
  updateTodoBody = async (id, body) => {
    // 할일 변경할때 사용
    this.setState({
      loading: true,
    });
    await todoAPI.patch(`/todos/${id}`, {
      body,
    });
    await this.fetchTodos();
  };

  completeTodo = async id => {
    // 할일 완료되었을 때 사용
    this.setState({
      loading: true,
    });
    await todoAPI.patch(`/todos/${id}`, {
      complete: true,
    });
    await this.fetchTodos();
  };

  deleteTodo = async id => {
    // 할일 삭제 할때 사용
    this.setState({
      loading: true,
    });
    await todoAPI.delete(`/todos/${id}`);
    await this.fetchTodos();
  };

  render() {
    const value = {
      todos: this.state.todos,
      loading: this.state.loading,
      fetchTodos: this.fetchTodos,
      createTodo: this.createTodo,
      deleteTodo: this.deleteTodo,
      updateTodoBody: this.updateTodoBody,
      completeTodo: this.completeTodo,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { TodoProvider, Consumer as TodoConsumer };
