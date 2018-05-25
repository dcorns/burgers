/**
 * OrderSummary
 * Created by dcorns on 5/24/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
import React from 'react';
import Aux from '../../../hoc/Aux';
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
      <strong>Total:{props.total.toFixed(2)}</strong>
      <p>Continue to Checkout</p>
      <button onClick={props.cancel}>CANCEL</button>
      <button onClick={props.continue}>CONTINUE</button>
    </Aux>
  );
};
export default orderSummary;