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
  {label: 'Salad', type:'salad', max:1},
  {label: 'Bacon', type: 'bacon', max:3},
  {label: 'Cheese', type: 'cheese', max:4},
  {label: 'Meat', type: 'meat', max:4},
];
const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map(ctrl => <BuildControl key={ctrl.label} label={ctrl.label} adjusted={(e) => props.ingredientAdjusted(ctrl.type,parseInt(e.target.dataset.amt,10))} disableMore={props.ingredientTotals[ctrl.type] === ctrl.max} disableLess={props.ingredientTotals[ctrl.type] === 0}/>)}
  </div>
);
export default buildControls;