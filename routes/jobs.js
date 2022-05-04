const router = require("express").Router();
const ctrl = require('../controllers');

router.get('/', ctrl.jobs.index);
router.get('/new', ctrl.jobs.newBook);
router.get('/:id', ctrl.jobs.show);
router.post('/', ctrl.jobs.create);
router.put('/:id', ctrl.jobs.update);
router.delete('/:id', ctrl.jobs.destroy);
router.get('/:id/edit', ctrl.jobs.edit);


module.exports = router;