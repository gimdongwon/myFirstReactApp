import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

storiesOf('TodoForm', module)
  .add('empry', () => <TodoForm />)
  .add('body가 주어진 경우', () => (
    <TodoItem body="test" id={1} onComplete={action('완료버튼 클릭됨')} />
  ))
  .add('complete', () => <TodoItem body="complete todo" complete />);
