/**
 * Layout
 * Created by dcorns on 5/22/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';

const layout = (props) => (
  <Aux>
  <div>Toolbar, Sidebar, Backdrop</div>
  <main className={classes.Content}>
  {props.children}
  </main>
  </Aux>
);
export default layout;