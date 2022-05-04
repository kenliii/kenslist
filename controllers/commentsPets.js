const db = require('../models');

function create(req, res) {
    db.Pets.findById(req.params.id, function (err, pets) {
        if(err) return res.send(err)
        pets.comments.push(req.body);
        pets.save(function (err){
        res.redirect(`/pets/${pets._id}`);
      });
    });
  }

  const destroy = (req, res)=> {
    db.Book.findByIdAndDelete(req.params.id, (err, foundPost) => {
        if (err) return res.send(err);

        return res.redirect(`/pets/${pets._id}`)
    });
};


module.exports = {
    create,
    destroy,
}
