let express = require('express');
let router = express.Router();

let eventService = require('../services/eventServices');

router.get('/event', eventService.index);
router.post('/event/store', eventService.store);

module.exports = router;