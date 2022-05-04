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
const newEvents = (req, res) => {
    db.Events.find({}, (err, foundEvents) => {
        if(err) return res.send(err);
        const context = {events: foundEvents};
        res.render('events/new', context)
    });
};

//delete
const destroy = (req, res)=> {
    db.Events.findByIdAndDelete(req.params.id, (err, foundEvents) => {
        if (err) return res.send(err);

        return res.redirect('/events')
    });
};

//update

const update = (req,res) =>{
    db.Events.findByIdAndUpdate(req.params.id,
        {
            $set: {...req.body},
        },

        {new:true},
        (err, updatedEvents) => {
            if(err) return res.send(err);
            return res.redirect(`/events/${updatedEvents._id}`)
        });
};

//create

const create = (req,res) => {
    db.Events.create(req.body, function(err, createdEvents) {
        if(err) return res.send(err)
        return res.redirect('/events')
    });
};

//edit

const edit = (req,res) => {
    db.Events.findById(req.params.id, (err, foundEvents) => {
        if(err) return res.send(err)
        const context = {events: foundEvents};
        res.render('events/edit', context)
    });
};

//show

const show = (req,res) => {
    db.Events.findById(req.params.id, (err, foundEvents) => {
        if(err) return res.send(err)
        

        const context = {events: foundEvents}
        return res.render('events/show', context)

    });
};





module.exports = {
    index,
    show,
    create,
    newEvents,
    edit,
    update,
    destroy,
};
