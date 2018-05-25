/**
 * Modal
 * Created by dcorns on 5/24/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
import React from 'react';
import classes from './Modal.css';
import Aux from '../../hoc/Aux';
import BackDrop from '../BackDrop/BackDrop';

const modal = (props) => (
  <Aux>
    <BackDrop show = {props.show} remove={props.modalClosed}/>
  <div className={classes.Modal} style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show ? '1': '0'}}>
    {props.children}
  </div>
  </Aux>
);
export default modal;