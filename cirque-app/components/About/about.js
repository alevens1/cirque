import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';


export default class About extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">About</h1>
        </header>
        <p className="App-intro">
         Our Story 
        </p>
      </div>
    );
  }
}


render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', className)} {...props}>
        <h1>
          About
        </h1>
      </div>
    );
  }
}
