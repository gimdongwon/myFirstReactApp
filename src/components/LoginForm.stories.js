import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import LoginForm from './LoginForm';

storiesOf('Welcome', module).add('empty', () => <LoginForm />);
