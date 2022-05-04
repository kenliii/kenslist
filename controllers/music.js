const db = require('../models');


//INDUCES

//index
const index = (req,res) =>{
    db.Music.find({}, function(err, foundMusic) {
        if(err) return res.send(err);
        const context = {music: foundMusic};
        res.render('music/index', context)
    });
};

//new
const newMusic = (req, res) => {
    db.Music.find({}, (err, foundMusic) => {
        if(err) return res.send(err);
        const context = {music: foundMusic};
        res.render('music/new', context)
    });
};

//delete
const destroy = (req, res)=> {
    db.Music.findByIdAndDelete(req.params.id, (err, foundMusic) => {
        if (err) return res.send(err);

        return res.redirect('/music')
    });
};

//update

const update = (req,res) =>{
    db.Music.findByIdAndUpdate(req.params.id,
        {
            $set: {...req.body},
        },

        {new:true},
        (err, updatedMusic) => {
            if(err) return res.send(err);
            return res.redirect(`/music/${updatedMusic._id}`)
        });
};

//create

const create = (req,res) => {
    db.Music.create(req.body, function(err, createdMusic) {
        if(err) return res.send(err)
        return res.redirect('/music')
    });
};

//edit

const edit = (req,res) => {
    db.Music.findById(req.params.id, (err, foundMusic) => {
        if(err) return res.send(err)
        const context = {music: foundMusic};
        res.render('music/edit', context)
    });
};

//show

const show = (req,res) => {
    db.Music.findById(req.params.id, (err, foundMusic) => {
        if(err) return res.send(err)
        

        const context = {music: foundMusic}
        return res.render('music/show', context)

    });
};





module.exports = {
    index,
    show,
    create,
    newMusic,
    edit,
    update,
    destroy,
};
