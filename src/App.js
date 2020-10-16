import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Home } from './Home'
import { CSVReader1 } from './CSVReader1'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Router>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/csv' component={CSVReader1} />
        </Switch>
        </Router>
    );
  }
}