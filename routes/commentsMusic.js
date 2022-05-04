const router = require("express").Router();

const commentsCtrl = require('../controllers');




router.post('/:id/comments', commentsCtrl.commentsMusic.create);

router.delete('/:id/comments', commentsCtrl.commentsMusic.destroy);



module.exports = router;