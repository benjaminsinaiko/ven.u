import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import NavBar from './UI/Navbar';

import './App.css';
const theme = createMuiTheme({
  palette: {
    primary: { main: '#E48611' },
    secondary: { main: '#5284AD' }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <NavBar />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
