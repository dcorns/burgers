/**
 * Button
 * Created by dcorns on 5/25/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
import React from 'react';
import classes from './Button.css';
const button = (props) => (
  <button onClick={props.clicked} className={[classes.Button, classes[props.btnType]].join(' ')}>
    {props.children}
    </button>
);
export default button;