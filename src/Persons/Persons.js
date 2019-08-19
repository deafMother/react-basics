import React from 'react';
import Person from './Person/Person';

class Persons extends React.Component {
  static getDerivedStateFromProps(props, state) {
    console.log('[Persons.js] getDerivedStateFromProps');
    return state;
  }

  // // receives the props for the update, legacy do not use thus
  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps..');
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    if (nextProps.persons !== this.props.persons) {
      return true;
    } else {
      return false;
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // can be used to store the pre props and state value before the update and use it as required
    console.log('[Persons.js] getSnapshotBeforeUpdate...');
    return null; // this return is received by componentDidUpdate as a snapshot after the update
  }

  componentDidUpdate(prevProps, prevState, shapshot) {
    console.log('[Persons.js] componentDisUpdate...');
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((p, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={p.name}
          age={p.age}
          changed={event => this.props.changed(event, p.id)}
        />
      );
    });
  }
}
export default Persons;
