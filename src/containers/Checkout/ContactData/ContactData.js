/**
 * ContactData
 * Created by dcorns on 6/1/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
import React, {Component} from 'react';
import Button from '../../../components/Button/Button';
import classes from './ContactData.css';
import axiosOrders from '../../../services/axios-orders';
import Spinner from '../../../components/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
  };

  orderHandler(event) {
    event.preventDefault();
    console.log(this.props);
    this.setState({loading: true});
    console.log(this.state);
    axiosOrders.post('orders.json', {...this.props.ingredients, totalPrice: this.props.totalPrice})
      .then((res) => {
        this.setState({loading: false});
      })
      .catch(err => {
        this.setState({loading: false});
        console.log(err)
      });

  }

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data.</h4>
        <form>
          <input type="text" name="name" placeholder="Your name"/>
          <input type="email" name="email" placeholder="Your email"/>
          <input type="text" name="street" placeholder="Your street"/>
          <input type="text" name="postalcode" placeholder="Your postal code"/>
          <Button btnType="Success" clicked={this.orderHandler.bind(this)}>ORDER</Button>
        </form>
      </div>
    )
  }
}

export default ContactData;