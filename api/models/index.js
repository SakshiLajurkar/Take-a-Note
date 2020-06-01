const mongoose = require("mongoose");
const dbConfig = require("../config/db-url");

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.notes = require("./notes-model")(mongoose);

module.exports = db;
