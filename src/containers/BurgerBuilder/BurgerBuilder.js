/**
 * BurgerBuilder
 * Created by dcorns on 5/22/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
const INGREDIENT_PRICES = {
  salad: .1,
  bacon: .5,
  cheese: .5,
  meat: 1,
};
class BurgerBuilder extends Component {
  state={
    ingredients:{
      salad: 0,
      bacon:0,
      cheese:0,
      meat:0,
    },
    totalPrice: 1,
  };

  adjustIngredientsHandler(type,amt){
    this.setState((prevState) => {
      const prevIngredients = prevState.ingredients[type];
      const updatedIngredients = {...prevState.ingredients};
      updatedIngredients[type] = prevIngredients + amt;
      return {
        totalPrice:prevState.totalPrice + INGREDIENT_PRICES[type]*amt,
        ingredients:updatedIngredients};
    });
  }

  render(){
   return(
     <Aux>
       <Burger ingredients={this.state.ingredients}/>
       <BuildControls ingredientAdjusted={this.adjustIngredientsHandler.bind(this)} ingredientTotals={this.state.ingredients} totalPrice={this.state.totalPrice}/>
       <Modal>
         <OrderSummary ingredients={this.state.ingredients} prices={INGREDIENT_PRICES} total={this.state.totalPrice}/>
       </Modal>
     </Aux>
     );
  }
}
export default BurgerBuilder;