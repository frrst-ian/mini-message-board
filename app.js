require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const messagesRouter = require('./routes/indexRouter'); 
const newRouter = require('./routes/newRouter');
const assetsPath = path.join(__dirname, 'public');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', messagesRouter);
app.use('/new', newRouter);

const PORT = process.env.PORT || 8000;
const HOST = '0.0.0.0';

app.listen(PORT, () => {
  console.log(`Listening on PORT ${HOST}:${PORT}`);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});