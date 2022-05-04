const router = require("express").Router();
const ctrl = require('../controllers');

router.get('/', ctrl.music.index);
router.get('/new', ctrl.music.newMusic);
router.get('/:id', ctrl.music.show);
router.post('/', ctrl.music.create);
router.put('/:id', ctrl.music.update);
router.delete('/:id', ctrl.music.destroy);
router.get('/:id/edit', ctrl.music.edit);


module.exports = router;