import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Pondus', age: 2 },
      { name: 'Greger', age: 27 },
    ],
  });

  const onClickHandler = () => {
    console.log('123');
    setPersonsState({
      persons: [
        { name: 'Pondus jr', age: 20 },
        { name: 'Greger sr', age: 270 },
      ],
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>
          And this is details
          <button onClick={onClickHandler}>Click me</button>
        </Person>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
          And this is details
          <button onClick={onClickHandler}>Click me</button>
        </Person>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
