/**
 * CheckoutSummary
 * Created by dcorns on 6/1/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Your Lucky to Order This</h1>
      <div style={{width: '100%', margin: 'auto'}}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button btnType="Danger" clicked={props.cancelClicked}>CANCEL</Button>
      <Button btnType="Success" clicked={props.continueClicked}>CONTINUE</Button>
    </div>
  );
};

export default checkoutSummary;