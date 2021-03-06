import React from 'react';
import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 60%;
  margin: auto;
  border: 1px solid #ccc;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = (props) => {
  return (
    <StyledDiv>
      <p onClick={() => props.click()}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input onChange={props.changed} value={props.name}></input>
    </StyledDiv>
  );
};

export default person;
