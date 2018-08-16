import React from 'react';
import './Switch.css';

const Switch = props => {
  return (
    <div>
      <input
        type="checkbox"
        checked={props.value}
        onChange={props.onChange}
        id="switcher"
        className="switcherInput hidden"
      />
      <label htmlFor="switcher" className="switcherLabel" />
      <p> {props.value ? 'On' : 'Off'} </p>
    </div>
  );
};

export default Switch;