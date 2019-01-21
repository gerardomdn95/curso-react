import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {name: 'Gerardo', age: '23'},
      {name: 'Weapons', age: '23'},
      {name: 'Scherer', age: '24'},
    ]
  };
  
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React APP</h1>
        <p>This is really working</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: GYM</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
