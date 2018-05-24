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
    <button className={classes.Less} onClick={props.adjusted} data-amt={-1} disabled={props.disableLess}>Less</button>
    <button className={classes.More} onClick={props.adjusted} data-amt={1} disabled={props.disableMore}>More</button>
  </div>
);
export default buildControl;