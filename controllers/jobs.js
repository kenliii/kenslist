const db = require('../models');


//INDUCES

//index
const index = (req,res) =>{
    db.Jobs.find({}, function(err, foundJobs) {
        if(err) return res.send(err);
        const context = {jobs: foundJobs};
        res.render('jobs/index', context)
    });
};

//new
const newJobs = (req, res) => {
    db.Jobs.find({}, (err, foundJobs) => {
        if(err) return res.send(err);
        const context = {jobs: foundJobs};
        res.render('jobs/new', context)
    });
};

//delete
const destroy = (req, res)=> {
    db.Jobs.findByIdAndDelete(req.params.id, (err, foundJobs) => {
        if (err) return res.send(err);

        return res.redirect('/jobs')
    });
};

//update

const update = (req,res) =>{
    db.Jobs.findByIdAndUpdate(req.params.id,
        {
            $set: {...req.body},
        },

        {new:true},
        (err, updatedJobs) => {
            if(err) return res.send(err);
            return res.redirect(`/jobs/${updatedJobs._id}`)
        });
};

//create

const create = (req,res) => {
    db.Jobs.create(req.body, function(err, createdJobs) {
        if(err) return res.send(err)
        return res.redirect('/jobs')
    });
};

//edit

const edit = (req,res) => {
    db.Jobs.findById(req.params.id, (err, foundJobs) => {
        if(err) return res.send(err)
        const context = {jobs: foundJobs};
        res.render('jobs/edit', context)
    });
};

//show

const show = (req,res) => {
    db.Jobs.findById(req.params.id, (err, foundJobs) => {
        if(err) return res.send(err)
        

        const context = {jobs: foundJobs}
        return res.render('jobs/show', context)

    });
};





module.exports = {
    index,
    show,
    create,
    newJobs,
    edit,
    update,
    destroy,
};
