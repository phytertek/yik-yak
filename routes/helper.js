var controllers = require('../controllers')

function getController(resource) {
    var controller = controllers[resource]
    return controller
}
function validateResponse (err, key, value, message) {
    if(err) {
        return failResponse(err, message)
    }
    return successResponse(key, value)
}
function successResponse (key, value) {
    var response = { confirmation: 'success' }
    response[key] = value
    return response
}
function failResponse (err, message) {
    return {
        confirmation: 'fail',
        message: message + err
    }
}
function getResource (req) {
    return {
        id: req.params.id,
        controller: getController(req.params.resource)
    }
}

module.exports = {
    resource: function(req, action, callback) {
        var resource = getResource(req)
        if(!resource.controller) {
            return failResponse(`Resource ${req.params.resource} does not exist`, '')
        } 
        switch (action) {
            case 'find':
                resource.controller.find(req.query, function(err, results) {
                    callback(validateResponse(err, 'results', results))
                })
                break
            case 'findById':
                resource.controller.findById(resource.id, function(err, result) {
                    callback(validateResponse(err, 'result', result))
                })
                break
            case 'create': 
                resource.controller.create(req.body, function(err, result) {
                    callback(validateResponse(err, 'result', result))
                })
                break
            case 'update':
                resource.controller.update(resource.id, req.body, function(err, result) {
                    callback(validateResponse(err, 'result', result))
                })
                break
            case 'delete':
                resource.controller.delete(resource.id, function(err, result) {
                    callback(validateResponse(err, 'result', result))
                })
                break
            default:
                callback(failResponse(`Action: ${action} is not recognized`, ''))
                break
        }
    }
}