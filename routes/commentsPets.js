const router = require("express").Router();

const commentsCtrl = require('../controllers');




router.post('/:id/comments', commentsCtrl.commentsPets.create);

router.delete('/:id/comments', commentsCtrl.commentsPets.destroy);



module.exports = router;