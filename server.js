const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();
const db = require("./api/models");
const path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));

db.mongoose
    .connect('mongodb+srv://sakshi:atlassak5@cluster0-iw3ro.mongodb.net/noteDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch(err => {
        console.log("MongoDB not connected", err);
        process.exit();
    });

require("./api/routes/routes")(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname = 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 8000;
app.listen(PORT, (req, res) => {
    console.log( `Server started at port ${PORT}`);
});
