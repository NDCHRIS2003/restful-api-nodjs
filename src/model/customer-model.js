let mongoose = require("mongoose");
const server = "cluster0.xmgyz.mongodb.net";
const database // input the instance of your database
const username = "your user name";
const password = "your password";
//const MongoClient = require("mongodb").MongoClient;

mongoose.connect(`mongodb://${username}:${password}@${server}/${database}`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});




let CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("customer-model", CustomerSchema);
