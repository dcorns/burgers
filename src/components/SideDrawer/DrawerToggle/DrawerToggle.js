/**
 * DrawerToggle
 * Created by dcorns on 5/26/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
import React from 'react';
import classes from './DrawerToggle.css';
const drawerToggle = (props) => (
  <div className={classes.DrawerToggle} onClick={props.toggleDrawer}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);
export default drawerToggle;