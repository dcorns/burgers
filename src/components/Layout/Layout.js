/**
 * Layout
 * Created by dcorns on 5/22/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import ToolBar from '../../components/Navigation/ToolBar/ToolBar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer:false,
  };
  sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer:false});
  };
  sideDrawerToggleHandler = () => {
    this.setState(prev => {
      return {showSideDrawer:!prev.showSideDrawer};
    });
  };
  render() {
    return (
      <Aux>
        <ToolBar menuClick={this.sideDrawerToggleHandler}/>
        <SideDrawer showSideDrawer={this.state.showSideDrawer} removeSideDrawer={this.sideDrawerCloseHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout;