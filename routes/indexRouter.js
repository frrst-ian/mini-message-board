const express = require('express');
const router = express.Router();

const messages = [
    {
        text: "I'm from the future u will die",
        user: "TheUnknown",
        added: new Date()
    },
    {
        text: "Hello, World!",
        user: "Fry",
        added: new Date()
    },
    {
        text: "No I'm not",
        user: "TheCreator3000",
        added: new Date()

    }
]

router.get('/', (req, res) => {
    res.render("index", { title: "Mini Message Board", messages: messages });
})

router.get('/message/:id', (req, res) => {
    const messageId = parseInt(req.params.id);
    if (messageId >= 0 && messageId < messages.length) {
        const message = messages[messageId];
        res.render("message", { message });
    } else {
        res.status(404).send("Message not found");
    }
});

module.exports = { router, messages };
