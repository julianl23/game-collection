const mongoose = require('mongoose');

// TODO: Can you import this from the Node package?
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // _id            : Schema.Types.ObjectId,
  userName       : String,
  password       : String
});

module.exports = UserSchema;
