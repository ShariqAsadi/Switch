import React, { Component } from 'react';
import './App.css';
import Switch from './components/Switch/Switch';

class App extends Component {
  state = {
    checked: false
  };

  switchHandler = event => {
    let newChecked = this.state.checked;
    this.setState({
      checked: !newChecked
    });
  };

  render() {
    return (
      <div className="App">
        <Switch value={this.state.checked} onChange={this.switchHandler} />
      </div>
    );
  }
}

export default App;
