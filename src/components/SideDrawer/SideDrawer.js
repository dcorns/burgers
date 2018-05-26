/**
 * SideDrawer
 * Created by dcorns on 5/25/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
import React from 'react';
import Logo from '../Logo/Logo';
import NavItems from '../Navigation/NavItems/NavItems';
import classes from './SideDrawer.css'

const sideDrawer = (props) => {
  return (
    <div className={classes.SideDrawer}>
      <div className={classes.Logo}>
        <Logo/>
      </div>
      <nav>
        <NavItems/>
      </nav>
    </div>
  );
};
export default sideDrawer;