import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';

// remember complex JS logic like if else.. etc cannot be writtent
// inside the render method i.e not inside the JSX, write it outside in a helper functio
class App extends Component {
  state = {
    person: [
      { id: 'e2ffd', name: 'Max', age: 33 },
      { id: 'gf6gg', name: 'Klu', age: 67 },
      { id: 'ty5ew', name: 'Gik', age: 5 }
    ],
    otherState: 'some other value',
    shoePersons: false
  };

  nameChangedHandler = (event, id) => {
    // first we will make put the changes into a persons object, which will be
    // a compy of the persons object in the state, then we will update the state
    const personIndex = this.state.person.findIndex(p => p.id === id);

    const person = { ...this.state.person[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.person];
    persons[personIndex] = person;

    // now update the old state
    this.setState({
      person: persons
    });
  };

  deletePersonHandler = personIndex => {
    const person = [...this.state.person];
    person.splice(personIndex, 1);
    this.setState({ person });
  };
  componentDidUpdate() {
    console.log('Updated');
  }

  togglePersonHandler = () => {
    const personShow = this.state.shoePersons;
    this.setState({ shoePersons: !personShow });
  };

  renderPerson = () => {
    if (this.state.shoePersons) {
      return (
        <div>
          {this.state.person.map((p, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                key={p.id}
                name={p.name}
                age={p.age}
                changed={event => this.nameChangedHandler(event, p.id)}
              />
            );
          })}
        </div>
      );
      // this.style.backgroundColor = 'red';
    } else {
      return null;
    }
  };

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let classes = [];
    if (this.state.person.length <= 2) {
      classes.push('red');
    }
    if (this.state.person.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className='App'>
        <h1>Welcome to React</h1>
        <p className={classes.join(' ')}>Remember its all java script</p>
        <button onClick={this.togglePersonHandler} style={style}>
          Switch State
        </button>
        {this.renderPerson()}
      </div>
    );
  }
}

export default Radium(App);
