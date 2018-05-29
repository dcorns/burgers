/**
 * simple-get
 * Created by dcorns on 9/26/17
 * Copyright © 2017 Dale Corns
 * MIT Licensed
 */
const simpleGet = (url) => {
const getReq = new XMLHttpRequest();
return new Promise((resolve, reject) => {
  getReq.addEventListener('load', () => {
    const result = JSON.parse(getReq.responseText);
    resolve(result);
  });
  getReq.open('GET', url);
  getReq.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  getReq.send();
});

};
export default simpleGet;