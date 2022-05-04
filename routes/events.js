const express= require("express");
const router= express.Router();
router.get("/", (req,res,next)=> {
    res.send("Welcome here to events!");

})

module.exports= router;