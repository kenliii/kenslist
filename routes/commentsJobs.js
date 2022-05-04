const router = require("express").Router();

const commentsCtrl = require('../controllers');




router.post('/:id/comments', commentsCtrl.commentsJobs.create);

router.delete('/:id/comments', commentsCtrl.commentsJobs.destroy);



module.exports = router;