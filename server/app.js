const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');

// Models
const Game = require('./models/Game');

// Mongoose Setup
// mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/game-collection', function(error) {
  console.log(error);
});
// const db = mongoose.connection;

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Support JSON-encoded bodies
app.use(bodyParser.json());

// Support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

app.route('/api/game/:id')
  .all(function(req, res, next) {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    next();
  })
  .get((req, res) => {
    res.json({
      game: {
        title: req.params.id
      }
    });
  })
  .post((req, res) => {
    // TODO: Is there a promise architecture that can be used here?

    // Error out response on error
    // db.on('error', () => {
    //   console.error.bind(console, 'connection error:');
    //   res.status(500).json({
    //     error: true,
    //     message: 'connection error'
    //   });
    // });
    // db.once('open', function() {
      // Parse response
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
    // });
  });

app.route('/api/games')
  .get((req, res) => {
    // Error out response on error
    // db.on('error', () => {
    //   console.error.bind(console, 'connection error:');
    //   res.status(500).json({
    //     error: true,
    //     message: 'connection error'
    //   });
    // });
    // db.once('open', function() {
      Game.find({}, function(err, games) {
        if (err) {
          res.status(500).json({
            error: true,
            message: err
          });
        } else {
          res.status(201).json({
            games: games
          });
        }
      });
    // });
  });

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
