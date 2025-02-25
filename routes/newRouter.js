const express = require("express");
const router = express.Router();
const { messages } = require('./indexRouter');
const { createMessageHandler } = require("../controllers/messagesController");

router.get('/', (req, res) => {
  res.render("form", { title: "New Message" });
})

router.post("/", createMessageHandler);
module.exports = router;