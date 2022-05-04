const router = require("express").Router();
const ctrl = require('../controllers');

router.get('/', ctrl.events.index);
router.get('/new', ctrl.events.newEvents);
router.get('/:id', ctrl.events.show);
router.post('/', ctrl.events.create);
router.put('/:id', ctrl.events.update);
router.delete('/:id', ctrl.events.destroy);
router.get('/:id/edit', ctrl.events.edit);


module.exports = router;