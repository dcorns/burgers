/**
 * Modal
 * Created by dcorns on 5/24/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
import React, {Component} from 'react';
import classes from './Modal.css';
import Aux from '../../hoc/Aux';
import BackDrop from '../BackDrop/BackDrop';

class Modal extends Component{
  shouldComponentUpdate(nextProps, nextState){
    return nextProps.show !== this.props.show;
  }
  
  render(){
    return(
      <Aux>
        <BackDrop show = {this.props.show} remove={this.props.modalClosed}/>
        <div className={classes.Modal} style={{transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: this.props.show ? '1': '0'}}>
          {this.props.children}
        </div>
      </Aux>
    );
  }
}
export default Modal;