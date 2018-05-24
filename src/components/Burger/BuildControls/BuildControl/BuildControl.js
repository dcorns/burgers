/**
 * BuildControl
 * Created by dcorns on 5/24/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
import React from 'react';
import classes from './BuildControl.css';
const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.Less}>Less</button>
    <button className={classes.More}>More</button>
  </div>
);
export default buildControl;