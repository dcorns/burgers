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
class BurgerBuilder extends Component {
  state={
    ingredients:{
      salad: 0,
      bacon:0,
      cheese:0,
      meat:0,
    },

  };

  render(){
   return(
     <Aux>
       <Burger ingredients={this.state.ingredients}/>
       <BuildControls/>
     </Aux>
     );
  }
}
export default BurgerBuilder;