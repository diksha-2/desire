import apiPaths from '../lib/api';
import api from '../lib/request';


export const register = (data, callback) => {
    return api.setMethod('POST').sendRequest(apiPaths.signUp, data, false, function (response) {
        callback(response.data);
    })
};

export const login = (data , callback) => {
    return api.setMethod('POST').sendRequest(apiPaths.logIn ,data, false, function(response){
        callback(response.data);
    })

};

export const forgotPassword =(data , callback)=> {
    return api.setMethod('POST').sendRequest(apiPaths.forgotPassword, data, false ,function(response){
        callback(response.data);
    })

};

export const confirmPassword =(token , callback) => {
    return api.setMethod('GET').sendRequest(apiPaths.confirmPassword + token ,null ,true , function(response){
     if(response){
      callback(response.data);
     }
     else{
         callback(null);
     }
    })
}