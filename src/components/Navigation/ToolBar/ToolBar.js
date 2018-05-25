/**
 * ToolBar
 * Created by dcorns on 5/25/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
import React from 'react';
import classes from './ToolBar.css';
import Logo from '../../../components/Logo/Logo';
const toolBar = (props) => (
  <header className={classes.ToolBar}>

    <div>MENU</div>
    <Logo/>
    <nav>
      ...
    </nav>

  </header>
);
export default toolBar;