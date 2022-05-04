const db = require('../models');

function create(req, res) {
    db.Jobs.findById(req.params.id, function (err, jobs) {
        if(err) return res.send(err)
        jobs.comments.push(req.body);
        jobs.save(function (err){
        res.redirect(`/jobs/${jobs._id}`);
      });
    });
  }

  const destroy = (req, res)=> {
    db.Jobs.findByIdAndDelete(req.params.id, (err, foundElectronic) => {
        if (err) return res.send(err);

        return res.redirect(`/jobs/${jobs._id}`)
    });
};


module.exports = {
    create,
    destroy,
}
