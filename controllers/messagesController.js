const { getAllMessages, getMessageById, insertMessage } = require("../db/queries");

const getAllMessagesHandler = async (req, res) => {
    try {
        const messages = await getAllMessages();
        res.render("index", { title: "Mini Message Board", messages })
    } catch (error) {
        console.error("Error fetching messages: ", error);
        res.status(500).send("Internal Server Error");
    }
};

const getMessageByIdHandler = async (req, res) => {
    try {
        const message = await getMessageById(req.params.id);
        if (message) {
            res.render("message", { message })
        } else {
            res.status(404).send("Message not found");
        }
    } catch (error) {
        console.error("Error fetching message: ", error);
        res.status(500).send("Internal Server Error");
    }
}

const createMessageHandler = async (req, res) => {
    try {
        const { user, text } = req.body;
        await insertMessage(user, text);
        res.redirect("/");
    } catch (error) {
        console.error("Error creating message: ", error);
        res.status(500).send("Internal server error");
    }
}

module.exports = {
    getAllMessagesHandler,
    getMessageByIdHandler,
    createMessageHandler
};

