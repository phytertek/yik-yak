var models = require('../models')

function validateResponse(err, response, callback) {
    if (err) {
        callback(err, null)
    }
    callback(null, response)
}

module.exports = {
    find: function(model, params, callback) {
        models[model].find(params, function(err, records) {
            validateResponse(err, records, callback)
        })
    },
    findById: function(model, id, callback) {
        models[model].findById(id, function(err, record) {
            validateResponse(err, record, callback)
        })
    },
    create: function(model, params, callback) {
        models[model].create(params, function(err, record) {
            validateResponse(err, record, callback)
        })
    },
    update: function(model, id, params, callback) {
        models[model].findByIdAndUpdate(id, params, {new: true}, function(err, record) {
            validateResponse(err, record, callback)
        })
    },
    delete: function(model, id, callback) {
        models[model].findByIdAndRemove(id, function(err) {
            validateResponse(err, null, callback)
        })
    }
}