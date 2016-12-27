var db = require('./helper')

module.exports = {
    find: function(params, callback) {
        db.find('comment', params, callback)
    },
    findById: function (id, callback) {
        db.findById('comment', id, callback)
    },
    create: function(params, callback) {
        db.create('comment', params, callback)
    },
    update: function(id, params, callback) {
        db.update('comment', id, params, callback)
    },
    delete: function(id, callback) {
        db.delete('comment', id, callback)
    }
}