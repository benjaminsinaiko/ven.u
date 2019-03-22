import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import NavBar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LandingPage from './components/landing/LandingPage';

import './App.css';
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
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
          <LandingPage />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
