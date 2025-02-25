const express = require('express');
const router = express.Router();

const { getAllMessagesHandler, getMessageByIdHandler } = require("../controllers/messagesController");

router.get("/", getAllMessagesHandler);
router.get("/message/:id", getMessageByIdHandler);

module.exports = router;
