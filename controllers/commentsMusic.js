const db = require('../models');

function create(req, res) {
    db.Gig.findById(req.params.id, function (err, music) {
        if(err) return res.send(err)
        music.comments.push(req.body);
        music.save(function (err){
        res.redirect(`/music/${music._id}`);
      });
    });
  }

const destroy = (req, res) => {
    db.Gig.findById(req.params.id, (err, music)=> {
      if(err) return res.send(err);
      music.comments.id(req.params.id).remove();
      music.save(function(err){
        res.redirect(`/music/${music._id}`)
      })
    })
  }
  
  
  
  module.exports = {
      create,
      destroy,
  }