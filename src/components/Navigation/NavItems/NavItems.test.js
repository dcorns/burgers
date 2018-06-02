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
  it('should render two navigation items if not authenticated', ()=>{
    const wrapper = shallow(<NavItems/>);
    expect(wrapper.find(NavItem)).toHaveLength(2);
  });
  it('should render three navigation items if authenticated', ()=>{
    const wrapper = shallow(<NavItems isAuthenticated/>);
    expect(wrapper.find(NavItem)).toHaveLength(3);
  });
});