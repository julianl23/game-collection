const Game = require('../../../models/Game');

const deleteGame = (req, res) => {
  Game.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      console.log(err);
      res.status(500).json({
        error: true,
        message: 'We were unable to delete this game. Please try again.'
      })
    } else {
      res.status(200).json({
        success: true,
        message: 'deleted'
      });
    }
  });
};
module.exports = deleteGame;