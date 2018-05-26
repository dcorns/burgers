/**
 * Layout
 * Created by dcorns on 5/22/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import ToolBar from '../../components/Navigation/ToolBar/ToolBar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';

const layout = (props) => (
  <Aux>
    <ToolBar/>
    <SideDrawer/>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
);
export default layout;