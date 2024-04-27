require('dotenv').config();
const fs = require('node:fs');
const path = require('node:path');

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.DATABASE_URL;

const modelsPath = path.join(__dirname, "../models");
fs.readdirSync(modelsPath).forEach(file => {
  if (~file.indexOf(".js")) {
    const model = require(path.join(modelsPath, file));
    const modelName = file.split(".")[0];
    db[modelName] = model(mongoose);
  }
});

module.exports = db;
