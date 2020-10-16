import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Test CSV Parse</h1>
      
       <a href="/csv" >CSV Reader1</a>
      </div>
    );
  }
}
