const Game = require('../../../models/Game');

const post = (req, res) => {
  const postedGame = {
    title: req.body.title,
    developer: req.body.developer,
    publisher: req.body.publisher,
    releaseDate: req.body.releaseDate,
    description: req.body.description
  };

  const gameInstance = new Game(postedGame);

  // TODO: How are updates handled in Mongoose?

  gameInstance.save(function (err, gameInstance) {
    if (err) {
      // TODO: Actual error parsing
      console.log(err);
      res.status(500).json({
        error: true,
        message: 'We were unable to save your game. Please try again.'
      })
    } else {
      res.status(201).json({
        game: gameInstance
      });
    }
  });
};

module.exports = post;