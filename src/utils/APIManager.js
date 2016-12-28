import axios from 'axios'

function sendAPIResponse (res, callback) {
    if(res.data.confirmation != 'success') {callback({message: res.data.message}, null); return}
    callback(null, res.data)
}

function sendAPIRequest(method, endpoint, data, callback) {
    axios({method: method, url: `/api/${endpoint}`, data: data})
    .then(res => sendAPIResponse(res, callback))
    .catch(err => callback(err.message, null))
}

export default {
    get: (resource, query, callback)        =>      sendAPIRequest('get', resource, query, callback),
    post: (resource, data, callback)        =>      sendAPIRequest('post', resource, data, callback),
    put: (resource, id, data, callback)     =>      sendAPIRequest('put', `${resource}/${id}`, data, callback),
    delete: (resource, id, callback)        =>      sendAPIRequest('delete', `${resource}/${id}`, null, callback)
}