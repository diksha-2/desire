import api from '../lib/request';
import apiPaths from '../lib/api';
import buildUrl from '../lib/utils';

export const  addProject = (data , callback) => {
    return api.setMethod('POST').sendRequest(apiPaths.addProject, data, true ,function(response){
        callback(response.data);
    })
};


export const getProject = (callback) => {
    return api.setMethod('GET').sendRequest(apiPaths.getProject , null , false , function(response){
        if(response){
            callback(response.data);
        }
    })
}



export const updateProject = (pID , data ,callback ) => {
    return api.setMethod('PUT').sendRequest(apiPaths.updateProject  + pID ,data , true ,function(response){
        if(response){
            callback(response.data);
        }
    })
};

export const deleteProject = (pID ) => {
    return api.setMethod('DELETE').sendRequest(apiPaths.deleteProject + pID , null , false , function(response){
        if(response){
            //callback(response.data);
        }
       
    })
};

export const getByProject= ( project ,callback) => {  //see again  getByResidential
    return api.setMethod('GET').sendRequest(apiPaths.getByProject +  project , null , false , function(response){
        if(response){
            callback(response);
        }
    })
};

export const getByResidential = (callback) => {
    return api.setMethod('GET').sendRequest(apiPaths.getByResidential , null , false , function(response){
        if(response){
            callback(response.data);
        }
    })
}

export const getByCommercial = (callback) => {
    return api.setMethod('GET').sendRequest(apiPaths.getByCommercial , null , false , function(response){
        if(response){
            callback(response.data);
        }
    })
}





export const  addProperty = (data , callback) => {
    return api.setMethod('POST').sendRequest(apiPaths.addProperty, data, false ,function(response){
        callback(response.data);
    })
};


export const getProperty= (callback) => {
    return api.setMethod('GET').sendRequest(apiPaths.getProperty , null , false , function(response){
        if(response){
            callback(response.data);
        }
    })
}

export const updateProperty = (proID, data ,callback ) => {
    return api.setMethod('PUT').sendRequest(apiPaths.updateProperty + proID , data , true ,function(response){
        if(response){
            callback(response.data);
        }
    })
};
// `${apiPaths.updateProperty}/${proID}`


export const deleteProperty = (proID, callback) => {
    return api.setMethod('DELETE').sendRequest(apiPaths.deleteProperty + proID , null , false , function(response){
        if(response){
            callback(response.data);
        }
        else{
            callback(null);
        }
    })
};



export const singleProperty =(proID, callback) => {
    return api.setMethod('GET').sendRequest(apiPaths.singleProperty + proID , null , false , function(response){
        if(response){
            callback(response.data);
        }
        
    })
}

export const getPropertytoShow = (callback) => {
    return api.setMethod('GET').sendRequest(apiPaths.getPropertytoShow , null , false , function(response){
        if(response){
            callback(response.data);
        }
    })
}


export const getPropertyBySearch = (filters, callback) => {
    let getPropertyBySearch = buildUrl(apiPaths.getPropertyBySearch, filters)
    return api.setMethod('GET').sendRequest(getPropertyBySearch, null, false, function (response) {
        if (response) {
            callback(response.data);
        }
    })
};


export const getPropertyByTypePro =(callback) => { //see
    return api.setMethod('GET').sendRequest(apiPaths.getPropertyByTypePro , null , false , function(response){
        if(response){
            callback(response);
        }
    })
}



export const getPropertyByPrice =(callback) => { //see
    return api.setMethod('GET').sendRequest(apiPaths.getPropertyByPrice , null , false , function(response){
        if(response){
            callback(response);
        }
    })
}

export const changeStatus = (proID,callback ) => {
    return api.setMethod('PUT').sendRequest(apiPaths.changeStatus + proID ,null , false ,function(response){
        if(response){
            callback(response.data);
        }
    })
};