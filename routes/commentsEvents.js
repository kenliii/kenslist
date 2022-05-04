const router = require("express").Router();

const commentsCtrl = require('../controllers');




router.post('/:id/comments', commentsCtrl.commentsEvents.create);

router.delete('/:id/comments', commentsCtrl.commentsEvents.destroy);



module.exports = router;