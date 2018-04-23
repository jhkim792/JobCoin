import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MuiThemeProvider><Login /></MuiThemeProvider>, div);
});
