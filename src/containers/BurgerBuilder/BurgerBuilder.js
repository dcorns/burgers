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
      return {ingredients:updatedIngredients};
    });
  }

  render(){
   return(
     <Aux>
       <Burger ingredients={this.state.ingredients}/>
       <BuildControls ingredientAdjusted={this.adjustIngredientsHandler.bind(this)} ingredientTotals={this.state.ingredients}/>
     </Aux>
     );
  }
}
export default BurgerBuilder;