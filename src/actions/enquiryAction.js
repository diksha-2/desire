import api from '../lib/request';
import apiPaths from '../lib/api';
import buildUrl from '../lib/utils';

export const addAmc = (data , callback) =>  {
    return api.setMethod('POST').sendRequest(apiPaths.addAmc , data , false , function(response){
        callback(response.data);
    })
};

export const getAmc = (callback) => {
    return api.setMethod('GET').sendRequest(apiPaths.getAmc , null , true , function(response){
        if(response){
        callback(response.data);
        }
        else{
            callback(null);
        }
    })
};

export const deleteAmc = (amcID , callback) => {
    return api.setMethod('DELETE').sendRequest(apiPaths.deleteAmc + amcID , null , true , function(response){
        if(response){
            callback(response.data);
        }
        else{
            callback(null);
        }
    })
};


export const addContactUs = (data , callback) =>  {
    return api.setMethod('POST').sendRequest(apiPaths.addContactUs , data , false , function(response){
        callback(response.data);
    })
};

export const getContactUs = (callback) => {
    return api.setMethod('GET').sendRequest(apiPaths.getContactUs , null , true , function(response){
        if(response){
        callback(response.data);
        }
        else{
            callback(null);
        }
    })
};

export const deleteContactUs = (contactID , callback) => {
    return api.setMethod('DELETE').sendRequest(apiPaths.deleteContactUs + contactID , null , true , function(response){
        if(response){
            callback(response.data);
        }
        else{
            callback(null);
        }
    })
};



export const addProjectEnquiry = (data , callback) =>  {
    return api.setMethod('POST').sendRequest(apiPaths.addProjectEnquiry , data , false , function(response){
        callback(response.data);
    })
};

export const getProjectEquiry = (callback) => {
    return api.setMethod('GET').sendRequest(apiPaths.getProjectEquiry , null , true , function(response){
        if(response){
        callback(response.data);
        }
        else{
            callback(null);
        }
    })
};

export const deleteProjectEnquiry = (enquiryID , callback) => {
    return api.setMethod('DELETE').sendRequest(apiPaths.deleteProjectEnquiry + enquiryID , null , true , function(response){
        if(response){
            callback(response.data);
        }
        else{
            callback(null);
        }
    })
}

