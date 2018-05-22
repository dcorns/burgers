/**
 * Layout
 * Created by dcorns on 5/22/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
import React from 'react';
import Aux from '../../hoc/Aux';
'use strict';
const layout = (props) => (
  <Aux>
  <div>Toolbar, Sidebar, Backdrop</div>
  <main>
  {props.children}
  </main>
  </Aux>
);
export default layout;