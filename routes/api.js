var express = require('express')
var router = express.Router()

var helper = require('./helper')

router.get('/:resource', function(req, res, next) {
    helper.resource(req, 'find', function(response) {
        res.json(response)
    })
})
router.get('/:resource/:id', function(req, res, next) {
    helper.resource(req, 'findById', function(response) {
        res.json(response)
    })
})
router.post('/:resource', function(req, res, next) {
    helper.resource(req, 'create', function(response) {
        res.json(response)
    })
})
router.put('/:resource/:id', function(req, res, next) {
    helper.resource(req, 'update', function(response) {
        res.json(response)
    })
})
router.delete('/:resource/:id', function (req, res, next) {
    helper.resource(req, 'delete', function(response) {
        res.json(response)
    })
}) 

module.exports = router