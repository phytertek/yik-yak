var db = require('./helper')

module.exports = {
    find: function(params, callback) {
        db.find('zone', params, callback)
    },
    findById: function (id, callback) {
        db.findById('zone', id, callback)
    },
    create: function(params, callback) {
        db.create('zone', params, callback)
    },
    update: function(id, params, callback) {
        db.update('zone', id, params, callback)
    },
    delete: function(id, callback) {
        db.delete('zone', id, callback)
    }
}