/**
 * Modal
 * Created by dcorns on 5/24/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
import React from 'react';
import classes from './Modal.css';

const modal = (props) => (
  <div className={classes.Modal}>
    {props.children}
  </div>
);
export default modal;