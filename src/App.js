import React, { Component } from 'react';
import Login from './pages/login';
import Profile from './pages/profile';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <BrowserRouter>
            <Switch>
              <Route exact path={"/"}
                component={Login}/>
              <Route path={"/profile/:user"}
                component={Profile} />
            </Switch>
          </BrowserRouter>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
