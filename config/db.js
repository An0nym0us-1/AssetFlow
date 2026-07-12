const mongoose = require("mongoose");

async function dbConnection() {
  await mongoose.connect(process.env.ATLASDB_URL);
}

module.exports = dbConnection;
