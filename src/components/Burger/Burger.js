/**
 * Burger
 * Created by dcorns on 5/22/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';
const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((e) => {
      return [...Array(props.ingredients[e])]
        .map((_,idx) => {
          return <BurgerIngredient key={e+idx} type={e}/>;
        });
    }).reduce((acc,el) => [...acc,...el]);
  console.log(transformedIngredients);
  if(transformedIngredients.length < 1) transformedIngredients = <p>Add some ingredients.</p>;
  return (<div className={classes.Burger}>
    <BurgerIngredient type={'bread-top'}/>
    {transformedIngredients}
    <BurgerIngredient type={'bread-bottom'}/>
  </div>);
};
export default burger;