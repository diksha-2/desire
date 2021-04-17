import buildUrl from '../lib/utils';
import apiPaths from '../lib/api';
import api from '../lib/request';

export const getUserAccountDetails = (callback) => {
    return api.setMethod('GET').sendRequest(apiPaths.getUserAccountDetails, null, true, function (response) {
        if (response) {
            callback(response.data);
        } else {
            callback(null);
        }
    })
};

export const  updateUserAccountDetails = (data ,callback) => {
 return api.setMethod('PUT').sendRequest(apiPaths.updateUserAccountDetails , data ,true ,function(response){
     if(response){
         callback(response.data);
     }
     else {
         callback(null);
     }
 })
};

export const addUserProfilePicture = (data ,callback) => {
    return api.setMethod('POST').sendRequest(apiPaths.addUserProfilePicture, data , true, function(response){
        callback(response.data);
    })

};

export const  changePassword = (data ,callback) => {
    return api.sendMethod('PUT').sendRequest(apiPaths.changePassword , data ,true ,function(response){
        callback(response.data);
    })
}

export const getAllUsers = (callback) => {
    return api.setMethod('GET').sendRequest(apiPaths.getAllUsers, null, true, function (response) {
        if (response) {
            callback(response.data);
        }
    })
};


