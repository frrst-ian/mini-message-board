const express = require("express");
const { route } = require("./indexRouter");
const router = express.Router();

router.get('/new' , (req,res) => {
    res.send("new bro");
})

