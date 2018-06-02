/**
 * NavItems
 * Created by dcorns on 5/25/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
import React from 'react';
import NavItem from './NavItem/NavItem';
import classes from './NavItems.css';
const navItems = (props) => (
  <ul className={classes.NavItems}>
    <NavItem link='/' active>Burger Builder</NavItem>
    {props.isAuthenticated?<NavItem link='/'>Orders</NavItem>:null}
    <NavItem link='/'>Authenticate</NavItem>
  </ul>
);
export default navItems;