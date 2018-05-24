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
    return <li key={ingKey+idx}>{ingKey}   {props.ingredients[ingKey].toFixed(2)}   {(props.prices[ingKey] * props.ingredients[ingKey]).toFixed(2)}</li>;
  },'');
  return(
    <Aux>
      <h3>Your Order</h3>
      <p>A super tasty burger with these ingredients:</p>
      <ul>
        {orderSummary}
      </ul>
      <strong>Total:{props.total.toFixed(2)}</strong>
    </Aux>
  );
};
export default orderSummary;