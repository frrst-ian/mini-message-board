const express = require("express");
const router = express.Router();
const {messages} = require('./indexRouter')

router.get('/' , (req,res) => {
    res.render("form" , {title: "New Message"});
})

router.post('/', (req, res) => {
    const { user, text } = req.body;
    messages.push({ text, user, added: new Date() });
    res.redirect('/');
  });

module.exports = router;