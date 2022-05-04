const router = require("express").Router();
const ctrl = require('../controllers');

router.get('/', ctrl.pets.index);
router.get('/new', ctrl.pets.newPets);
router.get('/:id', ctrl.pets.show);
router.post('/', ctrl.pets.create);
router.put('/:id', ctrl.pets.update);
router.delete('/:id', ctrl.pets.destroy);
router.get('/:id/edit', ctrl.pets.edit);


module.exports = router;