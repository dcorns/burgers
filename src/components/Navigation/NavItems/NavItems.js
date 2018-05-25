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
    <NavItem link='/'>Checkout</NavItem>
  </ul>
);
export default navItems;