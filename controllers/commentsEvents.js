const db = require('../models');

function create(req, res) {
    db.Events.findById(req.params.id, function (err, events) {
        if(err) return res.send(err)
        events.comments.push(req.body);
        events.save(function (err){
        res.redirect(`/events/${events._id}`);
      });
    });
  }

  const destroy = (req, res)=> {
    db.Book.findByIdAndDelete(req.params.id, (err, foundPost) => {
        if (err) return res.send(err);

        return res.redirect(`/events/${events._id}`)
    });
};


module.exports = {
    create,
    destroy,
}
