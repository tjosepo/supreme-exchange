import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import App from './App';

import './styles/normalize.css';
import './styles/styles.css';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#81c788'
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
