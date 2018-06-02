/**
 * NavItems.test
 * Created by dcorns on 6/2/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavItems from './NavItems'
import NavItem from './NavItem/NavItem';
configure({adapter: new Adapter()});
describe('<NavItems>', () => {
  let wrapper;
  beforeEach(()=>{
    wrapper=shallow(<NavItems/>);
  });
  it('should render two navigation items if not authenticated', ()=>{
    expect(wrapper.find(NavItem)).toHaveLength(2);
  });
  it('should render three navigation items if authenticated', ()=>{
    wrapper.setProps({isAuthenticated:true});
    expect(wrapper.find(NavItem)).toHaveLength(3);
  });
  it('should have an exact logout NavItem if authenticated', ()=>{
    wrapper.setProps({isAuthenticated:true});
    expect(wrapper.contains(<NavItem Link={'/logout'}>Logout</NavItem>)).toEqual(true);
  });
});