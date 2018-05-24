/**
 * BuildControls
 * Created by dcorns on 5/24/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'
const controls = [
  {label: 'Salad', type:'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
];
const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map(ctrl => <BuildControl key={ctrl.label} label={ctrl.label}/>)}
  </div>
);
export default buildControls;