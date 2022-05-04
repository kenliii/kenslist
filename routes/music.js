const router = require("express").Router();
const ctrl = require('../controllers');

router.get('/', ctrl.musics.index);
router.get('/new', ctrl.musics.newBook);
router.get('/:id', ctrl.musics.show);
router.post('/', ctrl.musics.create);
router.put('/:id', ctrl.musics.update);
router.delete('/:id', ctrl.musics.destroy);
router.get('/:id/edit', ctrl.musics.edit);


module.exports = router;