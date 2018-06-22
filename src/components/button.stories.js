import classnames from 'classnames';
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import LoginForm from './LoginForm';

storiesOf('button', module).add('primary', () => (
  <button classnames={classnames('button', { 'is-loading': true })}>
    로딩중
  </button>
));
