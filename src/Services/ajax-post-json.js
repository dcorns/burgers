/**
 * ajax-post-json
 * Created by dcorns on 8/6/17
 * Copyright © 2017 Dale Corns
 * MIT Licensed
 * Takes in a data object, converts to json and posts to url
 */
const send = (ajaxReq) => {
  //Must open before setting request header, so this order is required
  ajaxReq.open('POST', url, true);
  ajaxReq.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  if (token) {
    ajaxReq.setRequestHeader('Authorization', token);
  }
  if(data) {
    ajaxReq.send(JSON.stringify(data));
  }
  else{
    ajaxReq.send();
  }
};
export default (url, data=null, token=null, cb=null) => {

  const ajaxReq = new XMLHttpRequest();
  if(cb){
    ajaxReq.addEventListener('load', () => {
      if (ajaxReq.status === 200) cb(null, JSON.parse(ajaxReq.responseText));
      else cb(JSON.parse(ajaxReq.responseText), null);
    });
    ajaxReq.addEventListener('error', (err) => {
      cb({XMLHttpRequestError: 'A fatal error occurred, see console for more information',
        error: err}, null);
    });
    send(ajaxReq);
  }
  else{
    return new Promise((resolve, reject) => {
      ajaxReq.addEventListener('load', () => {
        if (ajaxReq.status === 200) resolve(JSON.parse(ajaxReq.responseText));
        else reject(JSON.parse(ajaxReq.responseText));
      });
      ajaxReq.addEventListener('error', (err) => {
        reject({XMLHttpRequestError: 'A fatal error occurred, see console for more information',
          error: err});
      });
      send(ajaxReq);
    });
  }
};