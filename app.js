const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/db.config.js');
const mongoose = require('mongoose');
const webRoutes = require('./config/web.routes.js');
const morgan = require("morgan");
const app = express();
var cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use(morgan('dev'));

app.use(cors())

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({ "message": "Welcome to Nvitek API Service. Wanna see something? Contact Us!" });
});

webRoutes(app);

const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log("Server is listening on port " + port);
});