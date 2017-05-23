import React, { Component } from 'react';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import Button from 'react-toolbox/lib/button/Button';
import logo from './logo.svg';
import './App.css';
import theme from './assets/theme';
import './assets/theme.css';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
            <Button icon="add" disabled />
            <Button label="submit" />
            <Button label="submit" primary />
            <Button label="submit" primary raised />
            <Button icon="check" label="OK" accent />
            <Button icon="add" label="submit" accent raised />
            <Button icon="add" floating />
            <Button icon="check" floating primary />
            <Button icon="add" floating accent />
            <Button icon="add" floating accent mini />
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
