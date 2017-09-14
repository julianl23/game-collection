const Game = require('../../../models/Game');

const get = (req, res) => {
  Game.findById(req.params.id, function(err, game) {
    if (err) {
      res.status(500).json({
        error: true,
        message: err
      });
    } else {
      res.json({
        game: game
      });
    }
  });
};

module.exports = get;