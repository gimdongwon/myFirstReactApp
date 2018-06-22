import React from 'react';

// export default 는 값을 export하는거고 export 는 여러가지가 가능하다
export default class TodoForm extends React.Component {
  static defaultProps = {
    onCreate: () => {}, // 할일 추가 버튼 클릭시 호출되는 함수
  };
  state = {
    newTodoBody: '',
  };

  handleInputChange = e => {
    this.setState({
      newTodoBody: e.target.value,
    });
  };

  handleButtonClick = e => {
    // 함수 내려받기
    this.props.onCreate(this.state.newTodoBody);
    this.setState({
      newTodoBody: '',
    });
  };
  render() {
    const { newTodoBody } = this.state;
    return (
      <React.Fragment>
        <label>
          새 할일
          <input
            type="text"
            value={newTodoBody}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleButtonClick}>추가</button>
        </label>
      </React.Fragment>
    );
  }
}
