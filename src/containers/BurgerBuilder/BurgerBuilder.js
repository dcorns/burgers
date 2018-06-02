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
import Spinner from '../../components/Spinner/Spinner';
import axiosOrders from '../../services/axios-orders';
import withErrorHandling from '../../hoc/withErrorHandler';

const INGREDIENT_PRICES = {
  salad: .1,
  bacon: .5,
  cheese: .5,
  meat: 1,
};

export class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 1,
    showOrder: false,
    loading: false,
  };

  componentDidMount() {
    console.log('[burgerBuilder] componentDidMount');
    axiosOrders.get('ingredients.json')
      .then(res => this.setState({ingredients: res.data}))
      .catch(err => {
        console.log(err.message);
        this.setState({
          ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
          }
        });
        alert('Remote ingredients not available, using local copy');
      });
  }

  adjustIngredientsHandler(type, amt) {
    this.setState((prevState) => {
      const prevIngredients = prevState.ingredients[type];
      const updatedIngredients = {...prevState.ingredients};
      updatedIngredients[type] = prevIngredients + amt;
      return {
        totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type] * amt,
        ingredients: updatedIngredients
      };
    });
  }

  orderNowHandler() {
    this.setState({showOrder: true});
  }

  cancelHandler() {
    this.setState({showOrder: false});
  }

  continueHandler() {
    const ingredients = Object.keys(this.state.ingredients).reduce((acc,ingd)=>{
      return acc+ingd+'='+this.state.ingredients[ingd]+'&';
    },'?');
    this.props.history.push('/checkout/'+ingredients+'price='+this.state.totalPrice);
  }

  render() {
    let order = null;
    let burger = <Spinner/>;
    if (this.state.ingredients) {
      burger = (<Aux><Burger ingredients={this.state.ingredients}/>
        <BuildControls ingredientAdjusted={this.adjustIngredientsHandler.bind(this)}
                       ingredientTotals={this.state.ingredients} totalPrice={this.state.totalPrice}
                       orderNow={this.orderNowHandler.bind(this)}/></Aux>);
      order = <OrderSummary ingredients={this.state.ingredients} purchaseCancelled={this.cancelHandler.bind(this)}
                            purchaseContinued={this.continueHandler.bind(this)} prices={INGREDIENT_PRICES}
                            total={this.state.totalPrice} cancel={this.cancelHandler.bind(this)}
                            />;
    }
    if (this.state.loading) order = <Spinner/>;
    return (
      <Aux>
        <Modal show={this.state.showOrder} modalClosed={this.cancelHandler.bind(this)}>
          {order}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandling(BurgerBuilder, axiosOrders);