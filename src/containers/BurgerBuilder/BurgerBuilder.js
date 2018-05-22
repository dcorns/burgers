/**
 * BurgerBuilder
 * Created by dcorns on 5/22/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
import React, {Component} from 'react';
import Aux from '../../hoc/Aux';

class BurgerBuilder extends Component {
  render(){
   return(
     <Aux>
       <div>Burger</div>
       <div>Build Controls</div>
     </Aux>
     );
  }
}
export default BurgerBuilder;