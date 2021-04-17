import api from '../lib/request';
import apiPaths from '../lib/api';
import buildUrl from '../lib/utils';


export const addTestimony = (data , callback)=>{
    return api.setMethod('POST').sendRequest(apiPaths.addTestimony , data , true, function(response){
      callback(response.data);
    })
};

export const getTestimony = (callback) =>{
   return api.setMethod('GET').sendRequest(apiPaths.getTestimony , null , false, function(response){
       if(response){
           callback(response);
       }
       else{
         callback(null); 
       }
   } )
};

export const deleteTestimony = (tid , callback) => {
    return api.setMethod('DELETE').sendRequest(apiPaths.deleteTestimony  + tid ,null, true, function(response){
        if(response){
            callback(response.data);
        }
        else{
            callback(null);
        }
    })
};

export const updateTestimony = (tid, data , callback) => {
    
return api.setMethod('PUT').sendRequest(apiPaths.updateTestimony + tid , data ,true , function(response){
    if(response){
        callback(response.data);
    }
})
};