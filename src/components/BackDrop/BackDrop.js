/**
 * BackDrop
 * Created by dcorns on 5/24/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
import React from 'react';
import classes from './BackDrop.css';
const backDrop = (props) => (
  props.show && <div className={classes.BackDrop} onClick={props.remove}></div>
);
export default backDrop;