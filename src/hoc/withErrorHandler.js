/**
 * withErrorHandler
 * Created by dcorns on 5/30/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
import React, {Component} from 'react';
import Modal from '../components/Modal/Modal';
import Aux from './Aux';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };

    componentDidMount() {
      console.log('[withErrorHandler] componentDidMount',this.state.error);
      axios.interceptors.request.use(req => {
        this.setState({error: null});
        console.log('[interceptRequest]',this.state.error);
        return req;
      });
      axios.interceptors.response.use(res => res, err => {
        this.setState({error: err});
        console.log('[interceptResponse]',this.state.error);
      });
    }

    errorConfirmedHandler() {
      this.setState({error: null});
    }

    render() {
      return (
        <Aux>
          <Modal show={this.state.error}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent{...this.props}/>
        </Aux>
      )
    }
  }
};
export default withErrorHandler;