import React from 'react';
import logo from './logo.svg';
import baseComponent from './aaa'
import './App.css';

class App extends baseComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentWillMount() {
    console.log('-----')
    console.log(this)
  }
  testFn = () => {
    console.log('000000')
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img onClick={ this.testFn66 } src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
