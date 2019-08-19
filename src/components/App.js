import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Persons/Persons';
import Cockpit from './Cockpit/Cockpit';
import withClass from '../Persons/hoc/WithClass';
import Aux from '../Persons/hoc/Auxillary';

// remember complex JS logic like if else.. etc cannot be writtent
// inside the render method i.e not inside the JSX, write it outside in a helper functio
class App extends Component {
  // constructor runs first
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  // getDerived... runs second
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStatefromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js should component update...]');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  state = {
    person: [
      { id: 'e2ffd', name: 'Max', age: 33 },
      { id: 'gf6gg', name: 'Klu', age: 67 },
      { id: 'ty5ew', name: 'Gik', age: 5 }
    ],
    otherState: 'some other value',
    shoePersons: false,
    changeCounter: 0,
    showCockpit: true
  };

  nameChangedHandler = (event, id) => {
    // first we will make put the changes into a persons object, which will be
    // a compy of the persons object in the state, then we will update the state
    const personIndex = this.state.person.findIndex(p => p.id === id);

    const person = { ...this.state.person[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.person];
    persons[personIndex] = person;

    // now update the old state, setState recives the old/prev state
    // if we rely on the old state , then is the correct way to
    // use setState
    this.setState((prevState, props) => {
      return {
        person: persons,
        changedCounter: prevState.changeCounter + 1
      };
    });
  };

  deletePersonHandler = personIndex => {
    const person = [...this.state.person];
    person.splice(personIndex, 1);
    this.setState({ person });
  };

  togglePersonHandler = () => {
    const personShow = this.state.shoePersons;
    this.setState({ shoePersons: !personShow });
  };

  renderPerson = () => {
    if (this.state.shoePersons) {
      return (
        <div>
          <Persons
            persons={this.state.person}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
      // this.style.backgroundColor = 'red';
    } else {
      return null;
    }
  };

  render() {
    console.log('[App.js] rendering...');
    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            showPersons={this.state.shoePersons}
            persons={this.state.person}
            clicked={this.togglePersonHandler}
          />
        ) : null}
        {this.renderPerson()}
      </Aux>
    );
  }
}

// using HOC
export default withClass(App, classes.App);
