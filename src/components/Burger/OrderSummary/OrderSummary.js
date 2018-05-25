/**
 * OrderSummary
 * Created by dcorns on 5/24/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../../components/Button/Button';
const orderSummary = (props) => {
  const orderSummary = Object.keys(props.ingredients).map((ingKey,idx) => {
    if(props.ingredients[ingKey]) return <li key={ingKey+idx}><span style={{textTransform:'capitalize',margin:'auto'}}>{ingKey}</span>   <span style={{margin:'auto'}}>{props.ingredients[ingKey]}</span>   <span style={{margin:'auto'}}>{(props.prices[ingKey] * props.ingredients[ingKey]).toFixed(2)}</span></li>;
    return null;
  },'');
  return(
    <Aux>
      <h3>Your Order</h3>
      <p>A super tasty burger with these ingredients:</p>
      <ul>
        {orderSummary}
      </ul>
      <strong>Total:${props.total.toFixed(2)}</strong>
      <p>Continue to Checkout</p>
      <Button clicked={props.purchaseCancelled} btnType="Danger">CANCEL</Button>
      <Button clicked={props.purchaseContinued} btnType="Success">CONTINUE</Button>
    </Aux>
  );
};
export default orderSummary;