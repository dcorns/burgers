/**
 * ToolBar
 * Created by dcorns on 5/25/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
import React from 'react';
import classes from './ToolBar.css';
import Logo from '../../../components/Logo/Logo';
import NavItems from '../NavItems/NavItems';
const toolBar = (props) => (
  <header className={classes.ToolBar}>

    <div>MENU</div>
    <div className={classes.Logo}>
      <Logo/>
    </div>
    <nav className={classes.DesktopOnly}>
    <NavItems/>
    </nav>
  </header>
);
export default toolBar;