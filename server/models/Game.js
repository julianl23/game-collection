const mongoose = require('mongoose');
const GameSchema = require('../schemas/Game');

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;
