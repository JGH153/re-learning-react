import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => (props.showPersons ? 'green' : 'red')};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.showPersons ? 'lightgreen' : 'salmon')};
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Greger', age: 27 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value',
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((current) => current.id === id);
    const person = {
      ...this.state.persons[personIndex],
      name: event.target.value,
    };
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = (personIndex) => {
    console.log('del', personIndex);
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };

  render() {
    const style = {};

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black',
      };
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <StyledButton showPersons={this.state.showPersons} onClick={this.togglePersonHandler}>
          Switch Names
        </StyledButton>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
