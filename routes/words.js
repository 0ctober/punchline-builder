let express = require('express');
let router = express.Router();

let word = require('../rest/controllers/word')

let s = require('../util/middlewares/authorization')

/** @GET  */
router.get('/sandbox', word.playground)
router.post('/sandbox', word.playground)

module.exports = router;