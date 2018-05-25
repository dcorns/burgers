/**
 * Logo
 * Created by dcorns on 5/25/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
import React from 'react';
import burgerLogo from '../../Assets/Images/burger-logo.png';
import classes from './Logo.css';
const logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerLogo}/>
  </div>
);
export default logo;