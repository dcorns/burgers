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
import BackDrop from '../../components/BackDrop/BackDrop';
import Aux from '../../hoc/Aux';

const sideDrawer = (props) => {
  const attachedClasses = props.showSideDrawer ? [classes.SideDrawer, classes.Open] : [classes.SideDrawer, classes.Close];
  return (
    <Aux>
      <BackDrop show={props.showSideDrawer} remove={props.removeSideDrawer}/>
    <div className={attachedClasses.join(' ')}>
      <div className={classes.Logo}>
        <Logo/>
      </div>
      <nav>
        <NavItems/>
      </nav>
    </div>
    </Aux>
  );
};
export default sideDrawer;