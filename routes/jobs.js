const express= require("express");
const router= express.Router();
router.get("/", (req,res,next)=> {
    res.send("Welcome here to jobs!");

})

module.exports= router;