/**
 * axios-orders
 * Created by dcorns on 5/30/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
import axios from 'axios';
const instance = axios.create({
  baseURL:'https://burger-43ead.firebaseio.com/',
});

export default instance;