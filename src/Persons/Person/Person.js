import React, { useEffect, useRef } from 'react';
import classes from './Person.css';
import Radium from 'radium'; // we can use media queries and pseudo selectors by importing radium
import Aux from '../hoc/Auxillary'; // use Fragment instead of this
import PropTypes from 'prop-types';
import persons from '../Persons';

class person extends React.Component {
  // const style = {
  //   '@media (min-width: 500px)': {
  //     width: '450px'
  //   }
  // }; // this is how we apply media query in react using radium

  // const myRef = useRef(null); //used for getting reference

  // // use effect runs after every render cycle
  // useEffect(() => {
  //   myRef.current.focus();
  // }, []);

  constructor() {
    this.inputElementRef = React.createRef();
  }
  componentDidMount() {
    console.log(
      `[Person.js] componentDidMount... ${this.inputElementRef.current} `
    );
  }

  render() {
    console.log('[Person.js] is rendering');
    return (
      // <div className={classes.Person}>
      <Aux>
        <p onClick={this.props.click}>
          A {this.props.name} is aged {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type='text'
          onChange={this.props.changed}
          value={this.props.name}
          ref={this.inputElementRef}
        />
      </Aux>
      // </div>
    );
  }
}

// specfying prop types
person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
  children: PropTypes.node
};
export default person;
