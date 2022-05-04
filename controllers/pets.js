const db = require('../models');


//INDUCES

//index
const index = (req,res) =>{
    db.Pets.find({}, function(err, foundPets) {
        if(err) return res.send(err);
        const context = {pets: foundPets};
        res.render('pets/index', context)
    });
};

//new
const newPets = (req, res) => {
    db.Pets.find({}, (err, foundPets) => {
        if(err) return res.send(err);
        const context = {pets: foundPets};
        res.render('pets/new', context)
    });
};

//delete
const destroy = (req, res)=> {
    db.Pets.findByIdAndDelete(req.params.id, (err, foundPets) => {
        if (err) return res.send(err);

        return res.redirect('/pets')
    });
};

//update

const update = (req,res) =>{
    db.Pets.findByIdAndUpdate(req.params.id,
        {
            $set: {...req.body},
        },

        {new:true},
        (err, updatedPets) => {
            if(err) return res.send(err);
            return res.redirect(`/pets/${updatedPets._id}`)
        });
};

//create

const create = (req,res) => {
    db.Pets.create(req.body, function(err, createdPets) {
        if(err) return res.send(err)
        return res.redirect('/pets')
    });
};

//edit

const edit = (req,res) => {
    db.Pets.findById(req.params.id, (err, foundPets) => {
        if(err) return res.send(err)
        const context = {Pets: foundPets};
        res.render('pets/edit', context)
    });
};

//show

const show = (req,res) => {
    db.Pets.findById(req.params.id, (err, foundPets) => {
        if(err) return res.send(err)
        

        const context = {Pets: foundPets}
        return res.render('pets/show', context)

    });
};





module.exports = {
    index,
    show,
    create,
    newPets,
    edit,
    update,
    destroy,
};
