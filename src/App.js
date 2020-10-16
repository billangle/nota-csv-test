import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Home } from './Home'
import { CSVReader1 } from './CSVReader1'
import { CSVReader3 } from './CSVReader3'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Router>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/csv' component={CSVReader1} />
        <Route exact path='/csv3' component={CSVReader3} />
        </Switch>
        </Router>
    );
  }
}