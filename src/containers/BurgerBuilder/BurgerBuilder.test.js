/**
 * BurgerBuilder.test
 * Created by dcorns on 6/2/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BurgerBuilder} from './BurgerBuilder'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
configure({adapter: new Adapter()});
describe('<BurgerBuilder>', () => {
  let wrapper;
  beforeEach(()=>{
    wrapper=shallow(<BurgerBuilder/>)
  });
  it('should render <BuildControls/> if it has an ingredient property in state', () => {
    wrapper.setState({ingredients:{}});
    expect(wrapper.find(BuildControls)).toHaveLength(1);
  });
});