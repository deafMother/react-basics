import React from 'react';
import './Person.css';
import Radium from 'radium'; // we can use media queries and pseudo selectors by importing radium

const person = props => {
  // const style = {
  //   '@media (min-width: 500px)': {
  //     width: '450px'
  //   }
  // }; // this is how we apply media query in react using radium

  return (
    <div className='Person'>
      <p onClick={props.click}>
        A {props.name} is aged {props.age}
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
