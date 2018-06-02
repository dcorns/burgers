/**
 * Checkout
 * Created by dcorns on 6/1/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
class checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1,
    },
    totalPrice:0
  };
  cancelOrderHandler = () => {
    this.props.history.goBack();
    this.props.history.goBack();
  };
  continueOrderHandler = () => {
    this.props.history.push('/checkout/contact-data');
  };
  componentDidMount(){
    const params = new URLSearchParams(this.props.location.search).entries();
    const ingredients = {};
    for (let p of params) {
      if(p[0] === 'price') this.setState({totalPrice:+p[1]});
      else ingredients[p[0]] = +p[1];
    }
    this.setState({ingredients});
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <CheckoutSummary ingredients={this.state.ingredients} continueClicked={this.continueOrderHandler}
                         cancelClicked={this.cancelOrderHandler}/>
        <Route path={this.props.match.url+'/contact-data'} render={()=>(<ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice}/>)}/>
      </div>
    )
  }
}

export default checkout;