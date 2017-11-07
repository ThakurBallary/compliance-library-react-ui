import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Areas from './areas/areas.js'

class App extends Component {
  render() {
    return ( 
      <div key='App' className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p> */}
          <nav className="navbar navbar-dark bg-dark">
            <div className="container">
              <nav className="navbar fixed-top navbar-light bg-dark">
                <a className="navbar-brand" href=''>Compliance Library</a>
              </nav>
            </div>
          </nav>
          <div className='mt-5 container'>
            <div className='row'>
              <div className='col-sm-4'>
                <Areas />
              </div>
            </div>            
          </div>
      </div>
    );
  }
}

export default App;