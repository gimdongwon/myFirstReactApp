import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  render() {
    const {
      todos,
      onTodoComplete,
      onTodoDelete,
      onTodoBodyUpdate,
    } = this.props;
    return (
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            {...todo}
            onComplete={onTodoComplete}
            onDelete={onTodoDelete}
            onBodyUpdate={onTodoBodyUpdate}
          />
        ))}
      </ul>
    );
  }
}
