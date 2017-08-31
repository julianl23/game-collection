const mongoose = require('mongoose');

// TODO: Can you import this from the Node package?
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  // _id            : Schema.Types.ObjectId,
  title          : String,
  developer      : String,
  publisher      : String,
  releaseDate    : Date,
  description    : String,
  created        : Date,
  edited         : Date
});

module.exports = GameSchema;
