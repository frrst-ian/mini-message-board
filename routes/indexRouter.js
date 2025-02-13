const express = require('express');
const router = express.Router();

const messages = [
    {
        text: "Hi mom!",
        user: "Mom",
        added: new Date()
    },
    {
        text: "Hi bender!",
        user: "Fry",
        added: new Date()
    }
]

router.get('/', (req, res) => {
    res.render("index" , {title: "Mini Message Board", messages : messages });
})

module.exports = {router , messages};
