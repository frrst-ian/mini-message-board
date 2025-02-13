require('dotenv').config();
const express = require('express');
const app = express();
const path = require("node:path");
const {router: indexRouter} = require('./routes/indexRouter');
const newRouter = require('./routes/newRouter')

app.use(express.urlencoded({extended:true}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use('/', indexRouter);
app.use('/new', newRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Listening on PORT http://localhost:${PORT}`);
});

