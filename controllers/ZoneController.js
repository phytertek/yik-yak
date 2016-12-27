var db = require('./helper')

module.exports = {
    find: function(params, callback) {
        db.find('zone', params, callback)
    },
    findById: function (id, callback) {
        db.findById('zone', id, callback)
    },
    create: function(params, callback) {
        params['zipCodes'] = params['zipCodes'].split(',').map(function(zip){return zip.trim()})
        db.create('zone', params, callback)
    },
    update: function(id, params, callback) {
        params['zipCodes'] = params['zipCodes'].split(',').map(function(zip){return zip.trim()})
        db.update('zone', id, params, callback)
    },
    delete: function(id, callback) {
        db.delete('zone', id, callback)
    }
}