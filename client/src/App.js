import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Route, BrowserRouter } from 'react-router-dom';

import AppLanding from './components/landing/AppLanding';
import NavBar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Privacy from './components/privacy/Privacy';
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
      <AppLanding />
      // <MuiThemeProvider theme={theme}>
      //   <BrowserRouter>
      //     <div className="App">
      //       <NavBar />
      //       <Route exact path="/" component={LandingPage} />
      //       <Route path="/privacy" component={Privacy} />
      //       <Footer />
      //     </div>
      //   </BrowserRouter>
      // </MuiThemeProvider>
    );
  }
}

export default App;
