import React, { useEffect } from 'react';
import classes from './cockpit.css';

const cockpit = props => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect..');

    const timer = setTimeout(() => {
      alert('UseEffect');
    }, 1000);

    return () => {
      console.log('[Cockpit.js] useEffectCleaning()');
      clearTimeout(timer); // the timer will run only once as we have cleared it
    };
  }, [props.persons]);
  const classesAssign = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    classesAssign.push(classes.red);
  }
  if (props.persons.length <= 1) {
    classesAssign.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Welcome to React</h1>
      <p className={classesAssign.join(' ')}>Remember its all java script</p>
      <button onClick={props.clicked}>Switch State</button>
    </div>
  );
};

export default React.memo(cockpit);
